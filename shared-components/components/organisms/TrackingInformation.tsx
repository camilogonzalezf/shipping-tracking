import React from "react";

import GeneralInfoSection from "../molecules/GeneralInfoSection";

/* Styles */
import { StyledTrackingInformation } from "@/styles/components/styles";

const TrackingInformation = () => {
  return (
    <StyledTrackingInformation>
      <GeneralInfoSection />
    </StyledTrackingInformation>
  );
};

export default TrackingInformation;
