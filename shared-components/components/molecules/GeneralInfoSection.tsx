import React, { useState, Fragment } from "react";
import { IconButton } from "@mui/material";

/* Components */
import SearchFieldHeader from "../atoms/SearchFieldHeader";
import SimpleButton from "../atoms/SimpleButton";

/* Styles */
import {
  StyledGeneralInfoSection,
  StyledGeneralInfoSectionTitle,
  StyledContainerGeneralInfoSectionTitle,
  StyledContainerSubtitle,
  StyledSimpleTextInfo,
  StyledContainerDigitalGuideInfo,
  StyledContainerSubtitlesDigitalGuideInfo,
  StyledSubtitleDigitalGuideInfo,
  StyledContainerDescriptionsDigitalGuideInfo,
  StyledDescriptionDigitalGuideInfo,
  StyledContainerDigitalGuideSection,
} from "@/styles/components/styles";

/* Icons */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ErrorIcon from "@mui/icons-material/Error";

const GeneralInfoSection = () => {
  const [showInputSearch, setShowInputSearch] = useState(false);
  const handleSearchClick = (event: any) => {
    setShowInputSearch(true);
  };

  return (
    <StyledGeneralInfoSection>
      <div>
        <StyledContainerGeneralInfoSectionTitle>
          {showInputSearch ? (
            <SearchFieldHeader
              showTextField={showInputSearch}
              onSetShowTextField={setShowInputSearch}
            />
          ) : (
            <Fragment>
              <StyledGeneralInfoSectionTitle>
                Información General del Envío
              </StyledGeneralInfoSectionTitle>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleSearchClick}
                aria-haspopup="true"
                aria-controls={showInputSearch ? "link" : undefined}
                sx={{
                  backgroundColor: "grey.300",
                  "&:hover": {
                    backgroundColor: "grey.400",
                  },
                }}
              >
                <SearchOutlinedIcon sx={{ fill: "#757575" }} />
              </IconButton>
            </Fragment>
          )}
        </StyledContainerGeneralInfoSectionTitle>
        <StyledContainerSubtitle>
          Guía nivel 1:
          <StyledSimpleTextInfo>
            {" "}
            26458239751
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleSearchClick}
              aria-haspopup="true"
              aria-controls={showInputSearch ? "input-search" : undefined}
              sx={{
                height: "30px",
                width: "30px",
                marginLeft: "10px",
                backgroundColor: "grey.300",
                "&:hover": {
                  backgroundColor: "grey.400",
                },
              }}
            >
              <LinkOutlinedIcon sx={{ fill: "#086bb5" }} />
            </IconButton>
          </StyledSimpleTextInfo>
        </StyledContainerSubtitle>
        <StyledContainerSubtitle>
          Unidades:
          <StyledSimpleTextInfo>3</StyledSimpleTextInfo>
        </StyledContainerSubtitle>
      </div>
      <StyledContainerDigitalGuideSection>
        <StyledContainerDigitalGuideInfo>
          <StyledContainerSubtitlesDigitalGuideInfo>
            <StyledSubtitleDigitalGuideInfo>
              Macroestado:
            </StyledSubtitleDigitalGuideInfo>
            <StyledSubtitleDigitalGuideInfo>
              Estado Tracking Guía:
            </StyledSubtitleDigitalGuideInfo>
          </StyledContainerSubtitlesDigitalGuideInfo>
          <StyledContainerDescriptionsDigitalGuideInfo>
            <StyledDescriptionDigitalGuideInfo>
              Abierta
            </StyledDescriptionDigitalGuideInfo>
            <StyledDescriptionDigitalGuideInfo>
              Entrega parcial
              <ErrorIcon sx={{ fill: "#EE5A31", width: 18, height: 18 }} />
            </StyledDescriptionDigitalGuideInfo>
          </StyledContainerDescriptionsDigitalGuideInfo>
        </StyledContainerDigitalGuideInfo>
        <StyledContainerDigitalGuideInfo>
          <SimpleButton label="Ver guía digital" />
        </StyledContainerDigitalGuideInfo>
      </StyledContainerDigitalGuideSection>
    </StyledGeneralInfoSection>
  );
};

export default GeneralInfoSection;
