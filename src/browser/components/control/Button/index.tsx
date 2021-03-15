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

  const [debouncing, setDebouncing] = useState<boolean>(false);

  const onButtonClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setDebouncing(true);
    if (debouncer) clearTimeout(debouncer);

    debouncer = setTimeout(() => {
      onClick();
      setDebouncing(false);
    }, debounce_ms);
  };

  return (
    <MaterialButton
      onClick={onButtonClick}
      color={color}
      {...rest}
      disabled={debouncing || props.disabled}
    >
      {children}
    </MaterialButton>
  );
}

export default Button;
