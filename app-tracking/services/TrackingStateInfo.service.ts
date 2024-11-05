import { createApiInstance } from "./api";

const urlApiBase = process.env.NEXT_APP_BACKEND_API_URL_REFERRALS
  ? process.env.NEXT_APP_BACKEND_API_URL_REFERRALS
  : "";

const api = createApiInstance(urlApiBase);

export const obtainsTrackingState = async (
  params: any,
  handleSuccess: any,
  handleError: any,
  onLoading: any,
  onLoaded: any
) => {
  try {
    onLoading();
    const response = await api.post(
      `${process.env.NEXT_APP_POST_TRACKING_STATE}`,
      params
    );

    const {
      data: { data, isError },
    } = response;

    if (!isError) {
      onLoaded();
      handleSuccess(data);
    }
  } catch (error: any) {
    onLoaded();
    handleError();
  }
};
