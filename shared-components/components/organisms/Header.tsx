import React, { Fragment, useState } from "react";

/* Atoms */
import TerminalSelector from "../atoms/TerminalSelector";
import UserInfo from "../atoms/UserInfo";
import SearchFieldHeader from "../atoms/SearchFieldHeader";
import GeneralMenu from "../atoms/GeneralMenu";
/* Styles */
import {
  StyledAppBar,
  StyledContainer,
  StyledContainerFirstPartHeader,
  StyledContainerLogo,
  StyledContainerTextLogo,
  StyledToolbar,
  StyledContainerPersonNameAndTerminal,
  StyledPersonName,
  StyledContainerBurguer,
  StyledContainerGeneralMenu,
} from "../../styles/components/styles";

/* Icons */
import Burguer from "../icons/Burguer";
import Logo from "../icons/Logo";

/* Interfaces */
import { HeaderInterface } from "@/interfaces/components";

const Header: React.FC<HeaderInterface> = ({ personName, terminals }) => {
  const [showTextField, setShowTextField] = useState(false);
  return (
    <StyledAppBar position="static" aria-label="Cabecera principal">
      <StyledContainer maxWidth="xl">
        <StyledContainerFirstPartHeader>
          <StyledContainerBurguer>
            <Burguer />
          </StyledContainerBurguer>
          <StyledContainerLogo>
            <Logo />
            <StyledContainerTextLogo>Tracking</StyledContainerTextLogo>
          </StyledContainerLogo>
        </StyledContainerFirstPartHeader>
        <StyledToolbar>
          {!showTextField && (
            <Fragment>
              <StyledContainerPersonNameAndTerminal>
                <StyledPersonName>{personName}</StyledPersonName>
                <TerminalSelector terminals={terminals} />
              </StyledContainerPersonNameAndTerminal>
              <UserInfo />
            </Fragment>
          )}
          <SearchFieldHeader
            showTextField={showTextField}
            onSetShowTextField={setShowTextField}
          />
          <StyledContainerGeneralMenu>
            <GeneralMenu />
          </StyledContainerGeneralMenu>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Header;
