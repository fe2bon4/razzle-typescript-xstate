import React, { useState, useEffect, SyntheticEvent } from "react";
import { ButtonGroup } from "@material-ui/core";
import { Save, Delete } from "@material-ui/icons";
import { Button } from "../../control";
type PropType = {
  onSave: any;
  onDiscard: any;
  disabled?: boolean;
  [key: string]: any;
};

function SaveDiscard(props: PropType) {
  const onDiscardButtonClick = () => {
    props.onSave();
  };

  const onSaveButtonClick = () => {
    props.onSave();
  };

  return (
    <ButtonGroup variant={"contained"} color={"primary"} {...props}>
      <Button
        startIcon={<Delete />}
        debounce_ms={200}
        color={"secondary"}
        onClick={onDiscardButtonClick}
      >
        Discard
      </Button>
      <Button
        startIcon={<Save />}
        debounce_ms={200}
        onClick={onSaveButtonClick}
      >
        Save
      </Button>
    </ButtonGroup>
  );
}

export default SaveDiscard;
