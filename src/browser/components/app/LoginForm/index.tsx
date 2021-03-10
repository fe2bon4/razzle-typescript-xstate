import React, { useState, useEffect, SyntheticEvent } from "react";
import { useMachine } from "@xstate/react";
import { spawn } from "./machine";

type PropType = {};

function LoginForm(props: PropType) {
  const machine = spawn({});
  const [state, send] = useMachine(machine);

  return <div></div>;
}

export default LoginForm;
