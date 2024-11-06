import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Store Actions */
import {
  getTerminalsListSuccess,
  getTerminalsListFailed,
} from "@/slices/terminalSlice";

/* Store */
import { RootState } from "@/store";

/* Services */
import { getTerminalsList } from "@/services/TerminalList.service";

/* Functions */
import { configTerminalList } from "@/helpers/general-functions";

const useGetTerminalsList = () => {
  const dispatch = useDispatch();

  const [terminalsListConfig, setTerminalsListConfig] = useState<any>([]);

  const [loadingTerminals, setLoadingTerminals] = useState<boolean>(false);

  const onLoading = () => setLoadingTerminals(true);
  const onLoaded = () => setLoadingTerminals(false);

  const terminalsList: any = useSelector(
    (state: RootState) => state.terminalsList.terminalsList
  );

  const errorTerminalsList: any = useSelector(
    (state: RootState) => state.terminalsList.error
  );

  const handleGetTerminalsList = async () => {
    return await getTerminalsList(
      (terminals: any) => {
        dispatch(getTerminalsListSuccess(terminals));
      },
      () => {
        dispatch(
          getTerminalsListFailed("No fue posible cargar la lista de Terminales")
        );
      },
      onLoading,
      onLoaded
    );
  };

  useEffect(() => {
    handleGetTerminalsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTerminalsListConfig(configTerminalList(terminalsList));
  }, [terminalsList]);

  return {
    terminalsListConfig,
    loadingTerminals,
    errorTerminalsList,
  };
};

export default useGetTerminalsList;
