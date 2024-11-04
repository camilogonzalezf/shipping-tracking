import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Store Actions */
import {
  getTrackingInfoSuccess,
  getTrackingInfoFailed,
  resetTrackingInfo,
} from "@/slices/trackingInfoSlice";

/* Store */
import { RootState } from "@/store";

/* Services */
import { getTrackingInfo } from "@/services/TrackingInfo.service";

const useGetTrackingInfo = () => {
  const dispatch = useDispatch();

  const [loadingTrackingInfo, setLoadingTrackingInfo] =
    useState<boolean>(false);

  const onLoading = () => setLoadingTrackingInfo(true);
  const onLoaded = () => setLoadingTrackingInfo(false);

  const trackingInfo: any = useSelector(
    (state: RootState) => state.trackingInfo.trackingInfo
  );

  const handleGetTrackingId = async (trackingId: any) => {
    return await getTrackingInfo(
      trackingId,
      (trackingInfo: any) => {
        dispatch(getTrackingInfoSuccess(trackingInfo));
      },
      (error: any) => {
        dispatch(getTrackingInfoFailed(error));
      },
      onLoading,
      onLoaded
    );
  };

  return {
    trackingInfo,
    loadingTrackingInfo,
    handleGetTrackingId,
  };
};

export default useGetTrackingInfo;
