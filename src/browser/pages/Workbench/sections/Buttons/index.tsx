import React, { useState } from "react";
import { ButtonGroup } from "@material-ui/core"; 
import { SaveDiscard } from "../../../../components/component";
import { Button } from "../../../../components/control";
type PropType = {};

function Buttons(props: PropType) {
  return (
    <div className="Workbench-resources">
      <div className="btn-row">
        <ButtonGroup
          // ts-ignore
          variant={"contained"}
          color={"primary"}
        >
          <Button debounce_ms={0} onClick={() => {}}>
            Default
          </Button>
          <Button debounce_ms={0} onClick={() => {}} color={"secondary"}>
            Secondary
          </Button>
          <Button debounce_ms={0} onClick={() => {}}>
            Primary
          </Button>

          <Button
            debounce_ms={0}
            onClick={() => {}}
            variant={"contained"}
            disabled={true}
          >
            Disabled
          </Button>
        </ButtonGroup>
      </div>

      <div className="btn-row">
        <SaveDiscard onDiscard={() => {}} onSave={() => {}} disabled={false} />
      </div>
    </div>
  );
}

export default Buttons;
