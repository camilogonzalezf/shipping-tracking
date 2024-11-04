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
import { StyledContainerGeneralMenuMobile } from "../styles/pages/styles";
import { Fragment } from "react";
export default function Home() {
  const router = useRouter();
  const { loadingTerminals, terminalsListConfig } = useGetTerminalsList();

  const handleReturnIndexPage = () => {
    router.push(`/`);
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
          <ContainerInfo childComponent={<RequestTrackingSection />} />
        </Fragment>
      )}
    </main>
  );
}
