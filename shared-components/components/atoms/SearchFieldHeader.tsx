import React, { Fragment, useState } from "react";
import { IconButton, TextField } from "@mui/material";

/* Styles */
import {
  StyledContainerSearchFieldHeader,
  StyledTextFieldSearchFieldHeader,
  StyledContainerSearchTextFieldHeader,
  StyledContainerFindIconHeader,
} from "../styles";

/* Icons */
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

/* Interface */
import { SearchFieldHeaderInterface } from "@/interfaces/components";

const SearchFieldHeader: React.FC<SearchFieldHeaderInterface> = ({
  showTextField,
  onSetShowTextField,
}) => {
  return (
    <StyledContainerSearchFieldHeader>
      {!showTextField ? (
        <IconButton
          aria-label="buscar"
          size="small"
          onClick={() => onSetShowTextField(true)}
        >
          <SearchOutlinedIcon sx={{ fill: "#757575" }} />
        </IconButton>
      ) : (
        <StyledContainerSearchTextFieldHeader>
          <StyledContainerFindIconHeader>
            <SearchOutlinedIcon sx={{ fill: "#757575" }} />
          </StyledContainerFindIconHeader>
          <StyledTextFieldSearchFieldHeader
            label="Buscar número de guía"
            variant="standard"
          />
          <StyledContainerFindIconHeader
            onClick={() => onSetShowTextField(false)}
          >
            <CloseOutlinedIcon sx={{ fill: "#757575" }} />
          </StyledContainerFindIconHeader>
        </StyledContainerSearchTextFieldHeader>
      )}
    </StyledContainerSearchFieldHeader>
  );
};

export default SearchFieldHeader;
