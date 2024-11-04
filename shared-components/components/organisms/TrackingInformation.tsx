import React from "react";

import GeneralInfoSection from "../molecules/GeneralInfoSection";

/* Styles */
import { StyledTrackingInformation } from "@/styles/components/styles";

/* Interfcae */
import { TrackingInformationInterface } from "@/interfaces/components";

const TrackingInformation: React.FC<TrackingInformationInterface> = ({
  trackingCode,
  unities,
  macroState,
  trackingState,
}) => {
  return (
    <StyledTrackingInformation>
      <GeneralInfoSection
        trackingCode={trackingCode}
        unities={unities}
        macroState={macroState}
        trackingState={trackingState}
      />
    </StyledTrackingInformation>
  );
};

export default TrackingInformation;
