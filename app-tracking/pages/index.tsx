import { Fragment } from "react";

import dynamic from "next/dynamic";

/* Hooks */
import { useRouter } from "next/router";
import useGetTerminalsList from "@/hooks/useGetTerminalsList";

/* Local Components */
const ContainerInfo = dynamic(
  () => import("../components/organisms/ContainerInfo"),
  {
    ssr: false,
  }
);

const RequestTrackingSection = dynamic(
  () => import("../components/molecules/RequestTrackingSection"),
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

// Styles
import {
  StyledContainerGeneralMenuMobile,
  StyledErrorMessage,
  StyledErrorContainer,
} from "../styles/pages/styles";

/* Icons */
import ErrorIcon from "@mui/icons-material/Error";

export default function Home() {
  const router = useRouter();
  const { loadingTerminals, terminalsListConfig, errorTerminalsList } =
    useGetTerminalsList();

  const handleReturnIndexPage = () => {
    router.push(`/`);
  };

  const childeComplete = () => {
    return (
      <Fragment>
        {!errorTerminalsList ? (
          <RequestTrackingSection />
        ) : (
          <StyledErrorContainer>
            <StyledErrorMessage>{errorTerminalsList}</StyledErrorMessage>
            <ErrorIcon sx={{ fill: "#0a6bb6" }} />
          </StyledErrorContainer>
        )}
      </Fragment>
    );
  };

  return (
    <main>
      {loadingTerminals ? (
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
          <ContainerInfo childComponent={childeComplete()} />
        </Fragment>
      )}
    </main>
  );
}
