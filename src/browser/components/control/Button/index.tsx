import React, { useState, useEffect, SyntheticEvent } from "react";

import { Button as MaterialButton, ButtonProps } from "@material-ui/core";

interface PropType extends ButtonProps  {
  children: any;
  onClick: any;
  debounce_ms?: number
};

function Button(props: PropType) {
  const {
    children,
    color = "primary",
    debounce_ms = 0,
    onClick,
    ...rest
  } = props;

  let debouncer: any;

  const onButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();

    if (debouncer) clearTimeout(debouncer);

    debouncer = setTimeout(onClick, debounce_ms);
  };

  return (
    <MaterialButton onClick={onButtonClick} color={color} {...rest}>
      {children}
    </MaterialButton>
  );
}

export default Button;
