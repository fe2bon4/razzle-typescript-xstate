import React, { useState, useEffect, SyntheticEvent } from "react";
import { ButtonGroup, Grid } from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";
import { Button } from "../../control";
type PropType = {
  onSave: any;
  onDiscard: any;
  disabled?: boolean;
  [key: string]: any;
};

function SaveDiscard(props: PropType) {
  const { onSave, onDiscard, disabled=false, ...rest } = props;
  const onDiscardButtonClick = () => {
    onDiscard();
  };

  const onSaveButtonClick = () => {
    onSave();
  };

  return (
    <Grid container xs={12} justify={"flex-end"} alignItems={"center"} >
      <Button
        variant={"contained"} 
        color={"secondary"}
        startIcon={<Delete />}
        debounce_ms={0}
        onClick={onDiscardButtonClick}
        disabled={disabled} 
        style={{
          margin: '0.20rem'
        }}
      >Discard</Button>
      
      <Button
        variant={"contained"}
        color={"primary"}
        startIcon={<Save />}
        debounce_ms={0}
        onClick={onSaveButtonClick}
        disabled={disabled} 
        style={{
          margin: '0.20rem'
        }}
      >Save</Button>
    </Grid>
   
  );
}

export default SaveDiscard;
