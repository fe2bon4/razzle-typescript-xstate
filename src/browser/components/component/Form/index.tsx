import React, { useState, useEffect, SyntheticEvent } from "react";
import SaveDiscard from "../SaveDiscard";
import  {PageHeader} from '../../control'
import {
  Paper,
  TextField,
  Grid,
} from "@material-ui/core"; 

import "./index.css";

interface GridProps {
  xs: number
  sm: number
  md: number
  lg: number
}
interface TextInputType<TVariant ="outlined", TGridProps=GridProps>{
  label: string;
  type: string;
  id: string;
  variant?: TVariant;
  grid_props?: TGridProps;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  [key: string]: any
}

type PropType<TObject = { [key: string]: any }> = {
  title: string,
  initial_value?: TObject,
  fields: TextInputType[],
  onSave: any,
  onDiscard: any
};

function Form(props: PropType) {
  const [ disabled, setDisabled ]  = useState<boolean>( true )
  const { 
    title="Header",
    initial_value, 
    fields,
    onSave, 
    onDiscard, 
  } = props

  const [state, setState] = useState<any>({
    field_values: { ...initial_value }
  });

  const onFieldChange = (e: SyntheticEvent) => {
    e.preventDefault();
    
    if( disabled ) setDisabled(false)

    setState({
      field_values: {
        ...state.field_values,
        //@ts-ignore
        [e.target.id]: e.target.value,
      }
    
    });
  };

  const onFormSave = () => {
    onSave(state.field_values)
  };

  const onFormDiscard = () => {
    console.log('Discarding')
    onDiscard()
  };

  const TextFieldStyle = {
    width: "100%",
    margin: "0.25rem",
  }

  const header_style ={ 
    padding: '0rem 0.1rem 0rem 0.1rem',
    margin: '0rem 0.1rem 0rem 0.1rem'
  }

  return (
    <Paper elevation={3} className={"form"}>
      <PageHeader className={"form-header"} itemClassName={"form-header-item"}>
        <h4 className="form-title">{title}</h4>
      </PageHeader>

      <Grid container color={"primary"} className={'form-body'}>
        {fields.map(({ id, grid_props, type, ...field_props }, key) => {
          const default_grid_props = { xs: 12 };

          let InputLabelProps = {};
          if (type === "date" || type === "time") {
            InputLabelProps = { shrink: true };
          }

          return (
            //@ts-ignore
            <Grid
              item
              container
              key={key}
              {...default_grid_props}
              {...grid_props}
              justify={"center"}
              alignItems={"center"}
            >
              <TextField
                {...field_props}
                type={type}
                style={TextFieldStyle}
                id={id}
                value={state.field_values[id] || ""}
                variant={"outlined"}
                onChange={onFieldChange}
                InputLabelProps={InputLabelProps}
              />
            </Grid>
          );
        })}
      
      </Grid>
      <SaveDiscard
        className={'form-footer'}
        disabled={disabled}
        onSave={onFormSave}
        onDiscard={onFormDiscard}
      />
    </Paper>
  );
}

export default Form;
