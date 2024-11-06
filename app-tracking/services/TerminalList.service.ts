import { createApiInstance } from "./api";

const urlApiBase = process.env.NEXT_APP_BACKEND_API_URL_GETS
  ? process.env.NEXT_APP_BACKEND_API_URL_GETS
  : "";

const api = createApiInstance(urlApiBase);

export const getTerminalsList = async (
  handleSuccess: any,
  handleError: any,
  onLoading: any,
  onLoaded: any
) => {
  try {
    onLoading();
    const response = await api.get(
      `${process.env.NEXT_APP_GET_TERMINALS_LIST}`
    );

    const {
      data: { data, isError },
    } = response;

    if (!isError) {
      onLoaded();
      handleSuccess(data);
    }
  } catch (error: any) {
    console.log(error);
    onLoaded();
    handleError();
  }
};
