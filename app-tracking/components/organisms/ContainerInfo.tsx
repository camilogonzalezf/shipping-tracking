import React from "react";

/*Styles */
import { StyledContainerInformation } from "@/styles/pages/styles";

const ContainerInfo: React.FC<{ childComponent: React.ReactNode }> = ({
  childComponent,
}) => {
  return (
    <StyledContainerInformation>{childComponent}</StyledContainerInformation>
  );
};

export default ContainerInfo;
