import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Store Actions */
import {
  getTrackingStateSuccess,
  getTrackingStateFailed,
  resetTrackingState,
} from "@/slices/trackingStateSlice";

/* Store */
import { RootState } from "@/store";

/* Services */
import { obtainsTrackingState } from "@/services/TrackingStateInfo.service";

const useObtainTrackingState = () => {
  const dispatch = useDispatch();

  const [loadingTrackingState, setLoadingTrackingState] =
    useState<boolean>(false);

  const onLoading = () => setLoadingTrackingState(true);
  const onLoaded = () => setLoadingTrackingState(false);

  const trackingState: any = useSelector(
    (state: RootState) => state.trackingState.trackingState
  );

  const handleGetTrackingState = async (params: any) => {
    const body = {
      guias: params,
    };
    return await obtainsTrackingState(
      body,
      (trackingState: any) => {
        dispatch(getTrackingStateSuccess(trackingState));
      },
      (error: any) => {
        dispatch(getTrackingStateFailed(error));
      },
      onLoading,
      onLoaded
    );
  };

  return {
    trackingState,
    loadingTrackingState,
    handleGetTrackingState,
  };
};

export default useObtainTrackingState;