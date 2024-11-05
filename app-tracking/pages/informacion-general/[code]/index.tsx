import React, { useState, useEffect, Fragment } from "react";

import dynamic from "next/dynamic";

/* Hooks */
import { useRouter } from "next/router";
import useGetTerminalsList from "@/hooks/useGetTerminalsList";
import useGetTrackingInfo from "@/hooks/useGetTrackingInfo";
import useObtainTrackingState from "@/hooks/useObtainTrackingState";
import useConfigGeneralInfoTab from "@/hooks/useConfigGeneralInfoTab";

/* Local Components */
const ContainerTrackingInfo = dynamic(
  () => import("../../../components/organisms/ContainerTrackingInfo"),
  {
    ssr: false,
  }
);

/* Shared Components */
const Header = dynamic(() => import("sharedComponents/header"), {
  ssr: false,
});
const GeneralMenu = dynamic(() => import("sharedComponents/general-menu"), {
  ssr: false,
});
const Loader = dynamic(() => import("sharedComponents/loader"), {
  ssr: false,
});
const TrackingTimeLine = dynamic(
  () => import("sharedComponents/tracking-time-line"),
  {
    ssr: false,
  }
);
const TrackingInformation = dynamic(
  () => import("sharedComponents/tracking-info"),
  {
    ssr: false,
  }
);
const TrackingTabsInfo = dynamic(
  () => import("sharedComponents/tracking-tabs-info"),
  {
    ssr: false,
  }
);

// Styles
import { StyledContainerGeneralMenuMobile } from "../../../styles/pages/styles";

export default function Home() {
  const router = useRouter();
  const [trackingStateConfig, setTrackingStateConfig] = useState("");

  const { loadingTerminals, terminalsListConfig } = useGetTerminalsList();
  const { trackingInfo, loadingTrackingInfo, handleGetTrackingId } =
    useGetTrackingInfo();

  const { trackingState, loadingTrackingState, handleGetTrackingState } =
    useObtainTrackingState();

  const { generalInfoConfig, handleConfigGeneralInfo } =
    useConfigGeneralInfoTab();

  const handleReturnIndexPage = () => {
    router.push(`/`);
  };

  useEffect(() => {
    if (router?.query?.code) {
      handleGetTrackingId(router?.query?.code);
      const params = [router?.query?.code];
      handleGetTrackingState(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  useEffect(() => {
    if (trackingState?.[0]?.estado?.length) {
      const states = trackingState?.[0]?.estado;
      const numberStates = states?.length;
      const messageLastTrackingState = states?.[numberStates - 1]?.descripcion;
      setTrackingStateConfig(messageLastTrackingState);
    }
  }, [trackingState]);

  useEffect(() => {
    if (trackingInfo) {
      handleConfigGeneralInfo(trackingInfo);
    }
  }, [trackingInfo]);

  const childComplete = () => {
    return (
      <Fragment>
        <TrackingInformation
          trackingCode={
            trackingInfo?.guia ? trackingInfo?.guia : "Sin información"
          }
          unities={
            trackingInfo?.total_unidades_declarado
              ? trackingInfo?.total_unidades_declarado
              : "Sin información"
          }
          macroState={"Abierta"}
          trackingState={trackingStateConfig}
        />
        <TrackingTimeLine trackingStates={trackingState?.[0]?.estado} />
        <TrackingTabsInfo generalInformation={generalInfoConfig} />
      </Fragment>
    );
  };

  return (
    <main>
      {loadingTerminals || loadingTrackingInfo || loadingTrackingState ? (
        <Loader />
      ) : (
        <Fragment>
          <Header
            personName={"Jhon Doe"}
            terminals={terminalsListConfig}
            onRouteIndexPage={handleReturnIndexPage}
          />
          <StyledContainerGeneralMenuMobile>
            <GeneralMenu />
          </StyledContainerGeneralMenuMobile>
          <ContainerTrackingInfo childComponent={childComplete()} />
        </Fragment>
      )}
    </main>
  );
}
