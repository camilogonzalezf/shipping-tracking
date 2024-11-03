import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

// Components
const Header = dynamic(() => import("sharedComponents/header"), {
  ssr: false,
});
const GeneralMenu = dynamic(() => import("sharedComponents/general-menu"), {
  ssr: false,
});

// Styles
import { StyledContainerGeneralMenuMobile } from "../styles/pages/styles";
export default function Home() {
  const mockTerminals = [
    {
      code: 1,
      label: "01-BOG",
    },
    {
      code: 2,
      label: "02-CAL",
    },
    {
      code: 3,
      label: "01-BOG",
    },
    {
      code: 1,
      label: "01-BOG",
    },
    {
      code: 1,
      label: "01-BOG",
    },
    {
      code: 1,
      label: "01-BOG",
    },
    {
      code: 1,
      label: "01-BOG",
    },
  ];

  return (
    <main>
      <Header personName={"Jhon Doe"} terminals={mockTerminals} />
      <StyledContainerGeneralMenuMobile>
        <GeneralMenu />
      </StyledContainerGeneralMenuMobile>
    </main>
  );
}
