import styled from "@emotion/styled";
import {
  Container,
  Toolbar,
  MenuItem,
  TextField,
  AppBar,
  Button,
} from "@mui/material";

import { ErrorMessage } from "formik";

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
  cursor: pointer;
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
  cursor: pointer;
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
  z-index: 10;
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

export const StyledContainerSearchFieldHeader = styled.div<{
  hiddenmobile?: boolean;
}>`
  margin: 0 10px 0 30px;

  @media (max-width: 600px) {
    display: ${({ hiddenmobile }) => (hiddenmobile ? "none" : "block")};
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

export const StyledCustomButton = styled(Button)<{
  isselected?: string;
}>`
  background: ${({ isselected }) =>
    isselected === "true" ? "#0a6bb6" : "#0000000D"};
  color: ${({ isselected }) => (isselected === "true" ? "#ffffff" : "#000000")};
  border-radius: 20px;
  width: 102px;
  font-size: 14px;

  @media (max-width: 600px) {
    width: 45%;
  }
`;

export const StyledTextFieldForm = styled(TextField)`
  width: 224px;

  & .MuiInputLabel-root {
    font-size: 14px;
    color: #757575;
    top: -10px;
  }

  & .MuiFilledInput-input {
    padding: 6px 10px 6px 10px;
  }

  & .MuiFilledInput-root {
    border-radius: 50px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  font-size: 10px;
  color: red;
`;

export const StyledTrackingInformation = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 0px 10px 0px;

  @media (max-width: 600px) {
    padding: 20px 0px 10px 0px;
  }
`;

export const StyledGeneralInfoSection = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledGeneralInfoSectionTitle = styled.h2`
  color: #086bb5;
  font-weight: 500;
  margin-right: 20px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledContainerGeneralInfoSectionTitle = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const StyledContainerSubtitle = styled.div`
  display: flex;
  color: #086bb5;
  font-size: 18px;
  font-weight: 500;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StyledSimpleTextInfo = styled.label`
  color: #212121;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StyledContainerDigitalGuideSection = styled.div`
  display: flex;
`;

export const StyledContainerDigitalGuideInfo = styled.div`
  display: flex;
  align-items: end;
  margin-left: 10px;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const StyledContainerSubtitlesDigitalGuideInfo = styled.div`
  text-align: right;
  @media (max-width: 600px) {
    font-size: 14px;
    text-align: left;
  }
`;

export const StyledSubtitleDigitalGuideInfo = styled.div`
  color: #212121;
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
`;

export const StyledContainerDescriptionsDigitalGuideInfo = styled.div`
  text-align: left;
  margin-left: 13px;
`;

export const StyledDescriptionDigitalGuideInfo = styled.div`
  display: flex;
  color: #000000;
  opacity: 0.54;
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
`;

export const StyledSimpleButton = styled(Button)<{
  isselected?: string;
}>`
  background: #0a6bb6;
  color: #ffffff;
  border-radius: 20px;
  font-size: 12px;
`;

export const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  z-index: 50;
`;

export const SpinnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainerTrackingTimeLine = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding: 20px 0 20px 0;
  position: relative;
  overflow-y: hidden;
`;

export const StyledContainerTrackingTimeLineIntern = styled.div`
  width: fit-content;
  display: flex;
  padding: 20px 0 20px 20px;
  position: relative;
`;

export const StyledContainerONlyTracking = styled.div<{ index: number }>`
  position: relative;
  z-index: 10;
  margin-left: ${({ index }) => (index === 0 ? "0px" : "150px")};
`;

export const StyledContainerIcon = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #003c82;
  border-radius: 100%;
`;

export const StyledBackLine = styled.div`
  background: #003c82;
  width: calc(100% - 50px);
  height: 1px;
  position: absolute;
  top: 25%;
  left: 50px;
  z-index: 0;
`;

export const StyledVerticalLine = styled.div`
  background: #e0e6e9;
  width: 2px;
  height: 25px;
  position: absolute;
  top: 55px;
  left: 50%;
  z-index: 0;
`;

export const StyledVerticalCircle = styled.div`
  background: #e0e6e9;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 80px;
  left: 43%;
  border-radius: 100%;
  z-index: 0;
`;

export const StyledContainerTextTimeLine = styled.div`
  width: 150px;
  position: absolute;
  top: 90px;
  left: -50px;
  z-index: 0;
  text-align: center;
`;

export const StyledDate = styled.p`
  font-size: 12px;
  color: #707070;
`;

export const StyledState = styled.p`
  font-size: 12px;
  color: #707070;
  font-weight: 600;
`;

export const StyledContainerTrackingTabsInfo = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 8px;
  padding: 28px 44px;
`;

export const StyledContainerItemsTrackingInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
  }
`;

export const StyledTrackingItem = styled.div``;
export const StyledTrackingItemTitle = styled.div`
  color: #000000de;
  font-size: 14px;
  font-weight: 600;
  display: flex;
`;
export const StyledTrackingItemDescription = styled.div`
  color: #00000099;
  font-size: 14px;
  font-weight: 500;
  margin-top: 1px;
`;

export const StyledTrackingItemIcon = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;
