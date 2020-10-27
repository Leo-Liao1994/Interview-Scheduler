import React from "react";
import classnames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  const buttonClass = classnames("botton", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
    "button--Default": props.danger

  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

