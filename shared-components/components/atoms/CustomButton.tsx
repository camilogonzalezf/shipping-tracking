import React from "react";
import { Button } from "@mui/material";

/* Styles */
import { StyledCustomButton } from "@/styles/components/styles";

/* Interface */
import { CustomButtonInterface } from "@/interfaces/components";
const CustomButton: React.FC<CustomButtonInterface> = ({
  buttonId,
  label,
  icon,
  buttonIdSelected,
  onSetButtonIdSelected,
}) => {
  const handleOnSetButtonIdSelected = () => {
    onSetButtonIdSelected(buttonId);
  };

  return (
    <StyledCustomButton
      startIcon={icon}
      sx={{ textTransform: "none" }}
      isselected={(buttonId === buttonIdSelected).toString()}
      onClick={() => handleOnSetButtonIdSelected()}
    >
      {label}
    </StyledCustomButton>
  );
};

export default CustomButton;
