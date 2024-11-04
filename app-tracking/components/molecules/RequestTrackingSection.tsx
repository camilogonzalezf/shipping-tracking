import React, { useState } from "react";
import dynamic from "next/dynamic";
import * as Yup from "yup";

/* Shared Components */
const CustomButton = dynamic(() => import("sharedComponents/custom-button"), {
  ssr: false,
});

const KeyBoardForm = dynamic(() => import("sharedComponents/keyboard-form"), {
  ssr: false,
});

/* Styles */
import {
  StyledContainerRequestTracking,
  StyledTitleRequestTracking,
  StyledContainerButtonsRequestTracking,
  StyledContainerForm,
  StyledBlueLabel,
  StyledContainerMultiplesGuides,
} from "@/styles/components/styles";

/* Icons*/
import SearchIcon from "@mui/icons-material/Search";
import QrCodeIcon from "@mui/icons-material/QrCode";
import EastIcon from "@mui/icons-material/East";

const RequestTrackingSection = () => {
  const GUIDE_BUTTON_ID = 1;
  const LABEL_BUTTON_ID = 2;

  const [buttonIdSelected, setButtonIdSelected] = useState(1);

  const initialValues = { alphanumeric: "" };

  const validationSchema = Yup.object().shape({
    alphanumeric: Yup.string()
      .matches(/^[a-zA-Z0-9]{11}$/, "11 caracteres alfanuméricos")
      .required("Campo requerido"),
  });

  const handleSubmit = (values: { alphanumeric: string }) => {
    // console.log(values);
  };

  return (
    <StyledContainerRequestTracking>
      <StyledTitleRequestTracking>
        Selecciona la consulta que quieres realizar
      </StyledTitleRequestTracking>
      <StyledContainerButtonsRequestTracking>
        <CustomButton
          buttonId={GUIDE_BUTTON_ID}
          label={"Guías"}
          icon={<SearchIcon />}
          buttonIdSelected={buttonIdSelected}
          onSetButtonIdSelected={setButtonIdSelected}
        />
        <CustomButton
          buttonId={LABEL_BUTTON_ID}
          label={"Etiqueta"}
          icon={<QrCodeIcon />}
          buttonIdSelected={buttonIdSelected}
          onSetButtonIdSelected={setButtonIdSelected}
        />
      </StyledContainerButtonsRequestTracking>
      {buttonIdSelected === GUIDE_BUTTON_ID && (
        <StyledContainerForm>
          <KeyBoardForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
            placeHolder={"Buscar número de guía ..."}
          />
        </StyledContainerForm>
      )}
      {buttonIdSelected === LABEL_BUTTON_ID && (
        <StyledContainerForm>
          <KeyBoardForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
            placeHolder={"Escanea la etiqueta 1d ..."}
            disabled
          />
        </StyledContainerForm>
      )}
      <StyledContainerMultiplesGuides>
        <StyledBlueLabel>Buscar múltiples guías</StyledBlueLabel>
        <div className="">
          <EastIcon sx={{ fill: "#00adee" }} />
        </div>
      </StyledContainerMultiplesGuides>
    </StyledContainerRequestTracking>
  );
};

export default RequestTrackingSection;
