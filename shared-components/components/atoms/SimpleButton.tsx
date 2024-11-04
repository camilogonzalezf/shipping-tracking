import React from "react";

/* Styles */
import { StyledSimpleButton } from "@/styles/components/styles";

const SimpleButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <StyledSimpleButton sx={{ textTransform: "none" }}>
      {label}
    </StyledSimpleButton>
  );
};

export default SimpleButton;
