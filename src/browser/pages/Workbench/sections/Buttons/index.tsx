import React, { useState } from "react";
import { Button } from "../../../../components/control";
type PropType = {};

function Buttons(props: PropType) {
  return (
    <ul className="Workbench-resources">
      <li>
        <Button
          debounce_ms={0}
          onClick={() => {}}
          variant={"contained"}
          color={"default"}
        >
          Default
        </Button>
      </li>
      <li>
        <Button
          debounce_ms={0}
          onClick={() => {}}
          variant={"contained"}
          color={"primary"}
        >
          Primary
        </Button>
      </li>
      <li>
        <Button
          debounce_ms={0}
          onClick={() => {}}
          variant={"contained"}
          color={"secondary"}
        >
          Secondary
        </Button>
      </li>
      <li>
        <Button
          debounce_ms={0}
          onClick={() => {}}
          variant={"contained"}
          disabled
        >
          Disabled
        </Button>
      </li>
    </ul>
  );
}

export default Buttons;
