import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

/* Styles */
import {
  StyledContainerTrackingTimeLine,
  StyledContainerIcon,
  StyledContainerONlyTracking,
  StyledBackLine,
  StyledVerticalLine,
  StyledVerticalCircle,
  StyledContainerTextTimeLine,
  StyledState,
  StyledDate,
  StyledContainerTrackingTimeLineIntern,
} from "@/styles/components/styles";

/* Interface */
import { TrackingTimeLineInterface } from "@/interfaces/components";

/* Constants */
import { trackingStatesLabels } from "@/constants";

const TrackingTimeLine: React.FC<TrackingTimeLineInterface> = (
  trackingStates
) => {
  const [infoConfigured, setInfoConfigured] = useState<any>();

  useEffect(() => {
    //@ts-ignore
    const trackingInfo = [...trackingStates.trackingStates];
    if (trackingInfo?.length) {
      const trackingConfigured: any = [];
      //@ts-ignore
      trackingInfo?.map((tracking: any) => {
        const hour = tracking?.hora ? tracking?.hora : "";
        const objectTracking = {
          date: tracking?.fecha + " " + hour,
          config: { ...trackingStatesLabels[parseInt(tracking?.codigo) - 1] },
        };
        trackingConfigured.push(objectTracking);
      });
      setInfoConfigured([...trackingConfigured]);
    }
  }, [trackingStates]);

  return (
    <StyledContainerTrackingTimeLine>
      <StyledContainerTrackingTimeLineIntern>
        {infoConfigured?.map((tracking: any, index: number) => (
          <StyledContainerONlyTracking key={index} index={index}>
            <StyledContainerIcon>
              <ReactSVG src={tracking?.config?.imgUrl} />
            </StyledContainerIcon>
            <StyledVerticalLine />
            <StyledVerticalCircle />
            <StyledContainerTextTimeLine>
              <StyledDate>{tracking?.date}</StyledDate>
              <StyledState>{tracking?.config?.label}</StyledState>
            </StyledContainerTextTimeLine>
          </StyledContainerONlyTracking>
        ))}
        <StyledBackLine />
      </StyledContainerTrackingTimeLineIntern>
    </StyledContainerTrackingTimeLine>
  );
};

export default TrackingTimeLine;
