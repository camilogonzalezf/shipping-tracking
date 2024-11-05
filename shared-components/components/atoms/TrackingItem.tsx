import React, { useState } from "react";

/* Styles */
import {
  StyledTrackingItem,
  StyledTrackingItemTitle,
  StyledTrackingItemDescription,
  StyledTrackingItemIcon,
} from "@/styles/components/styles";

/* Icons */
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

const TrackingItem: React.FC<{
  title: string | null;
  description: string | null;
}> = ({ title, description }) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCopyText = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(`${title}: ${description}`.replace(/<br\/?>/g, ""))
        .then(() => {
          setOpenSnackbar(true);
        })
        .catch((err) => {
          console.error("Error al copiar el texto: ", err);
        });
    } else {
      console.error("La API del portapapeles no está disponible.");
    }
  };

  return (
    <StyledTrackingItem>
      <StyledTrackingItemTitle>
        {title ? title : "Sin información"}:
        <StyledTrackingItemIcon onClick={() => handleCopyText()}>
          <ContentCopyRoundedIcon
            sx={{ fill: "#086BB5", width: 15, height: 15 }}
          />
        </StyledTrackingItemIcon>
      </StyledTrackingItemTitle>
      <StyledTrackingItemDescription>
        <label
          dangerouslySetInnerHTML={{
            __html: description ? description : "Sin información",
          }}
        />
      </StyledTrackingItemDescription>
    </StyledTrackingItem>
  );
};

export default TrackingItem;
