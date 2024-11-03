import styled from "@emotion/styled";
import { Container, Toolbar, MenuItem, TextField, AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  color: black;
  padding: 0 30px 0 27px !important;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    padding: 0 !important;
    max-width: 100%;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    padding: 0 !important;
  }
`;

export const StyledContainerFirstPartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledContainerBurguer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledContainerLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
  margin-left: 24px;
  font-size: 14px;
  color: #0000008a;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledContainerTextLogo = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
  color: #0000008a;
  @media (max-width: 600px) {
    margin-top: -15px;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  padding: 0 !important;
`;

export const StyledContainerPersonNameAndTerminal = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 !important;
`;

export const StyledPersonName = styled.label`
  text-align: left;
  font-size: 14px;
  color: #086bb5;
`;

export const StyledContainerTerminalSelector = styled(Container)`
  position: relative;
  padding: 0 !important;
  font-size: 14px;
  display: flex;
  aling-items: center;
  margin-top: 5px;
`;

export const StyledContainerSelectedItem = styled(Container)`
  margin-left: 3px;
  padding: 0 !important;
  display: flex;
  justify-content: space-between;
  color: #00000099;
  cursor: pointer;
`;

export const StyledTerminalSelect = styled(Container)`
  padding: 0 !important;
`;

export const StyledContainerListTerminalSelect = styled(Container)`
  padding: 0 !important;
  position: absolute;
  left: 0;
  top: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 5px #00000029;
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
`;

export const StyledTerminalSelectOption = styled(Container)`
  padding: 20px 20px !important;
  color: #00000099;
  cursor: pointer;

  &:hover {
    background-color: #0000000d;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  width: 200px;
`;

export const StyledLabelMenuItem = styled.label`
  margin-left: 20px;
  font-size: 14px;
  color: #00000099;
`;

export const StyledContainerSearchFieldHeader = styled.div`
  margin: 0 10px 0 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledContainerSearchTextFieldHeader = styled.div`
  display: flex;
  align-items: end;
`;

export const StyledContainerFindIconHeader = styled.div`
  display: flex;
  align-items: end;
  margin: 0 12px 0 5px;
  cursor: pointer;
`;

export const StyledTextFieldSearchFieldHeader = styled(TextField)`
  width: 200px;
  & .MuiInputBase-input {
    font-size: 12px;
  }

  & .MuiInputLabel-root {
    font-size: 12px;
    color: #757575;
  }
`;

export const StyledMenuItemGeneralMenu = styled(MenuItem)`
  display: flex;
  flex-direction: column;
`;

export const StyledLabelMenuItemGeneralMenu = styled.label`
  font-size: 12px;
  color: #00000099;
  text-align: center;
`;

export const StyledContainerGeneralMenu = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
