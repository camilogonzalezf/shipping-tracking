import React from "react";

const ButtonFinal: React.FC<{ onClick: any }> = ({ onClick }) => {
  return <button onClick={() => onClick()}>Click me</button>;
};

export default ButtonFinal;
