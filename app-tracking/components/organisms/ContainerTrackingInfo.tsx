import React from "react";

/*Styles */
import { StyledContainerTrackingInformation } from "@/styles/pages/styles";

const ContainerInfo: React.FC<{ childComponent: any }> = ({
  childComponent,
}) => {
  return (
    <StyledContainerTrackingInformation>
      {childComponent}
    </StyledContainerTrackingInformation>
  );
};

export default ContainerInfo;
