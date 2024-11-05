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

  const errorTrackingInfo: any = useSelector(
    (state: RootState) => state.trackingInfo.error
  );

  const handleGetTrackingId = async (trackingId: any) => {
    return await getTrackingInfo(
      trackingId,
      (trackingInfo: any) => {
        dispatch(getTrackingInfoSuccess(trackingInfo));
      },
      () => {
        dispatch(
          getTrackingInfoFailed(
            "No fue posible obtener la información del envío"
          )
        );
      },
      onLoading,
      onLoaded
    );
  };

  return {
    trackingInfo,
    loadingTrackingInfo,
    handleGetTrackingId,
    errorTrackingInfo,
  };
};

export default useGetTrackingInfo;
