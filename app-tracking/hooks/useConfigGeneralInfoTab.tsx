import { useEffect, useState } from "react";

const useConfigGeneralInfoTab = () => {
  const [generalInfoConfig, setGeneralInfoConfig] = useState<any>([]);

  const handleConfigGeneralInfo = (trackingInfo: any) => {
    const validationEmpty = (value: any) => {
      return value ? value : "";
    };

    const {
      cliente,
      remitente,
      destinatario,
      servicio,
      observaciones,
      producto,
      contenido,
      referencia,
    } = trackingInfo;

    const originTerminalDescription =
      validationEmpty(remitente?.zonificacion?.codigo_terminal) +
      " - " +
      validationEmpty(remitente?.zonificacion?.nombre_terminal);

    const destinyTerminalDescription =
      validationEmpty(destinatario?.zonificacion?.codigo_terminal) +
      " - " +
      validationEmpty(destinatario?.zonificacion?.nombre_terminal);

    const generalInfo: any = [
      {
        title: "Cliente",
        description: `Nit/Div: ${
          validationEmpty(cliente?.nit) + validationEmpty(cliente?.div)
        }<br/>${validationEmpty(cliente?.razon_social)}`,
      },
      {
        title: "Remitente",
        description: `${validationEmpty(
          remitente?.nombre
        )}<br/>${validationEmpty(remitente?.zonificacion?.direccion)}`,
      },
      {
        title: "Destinatario",
        description: `${validationEmpty(destinatario?.nombre)}<br/>${
          destinatario?.zonificacion?.direccion
        }`,
      },
      {
        title: "Terminal Origen",
        description: originTerminalDescription,
      },
      {
        title: "Terminal Destino",
        description: destinyTerminalDescription,
      },
      {
        title: "Nivel/Servicio",
        description: `${validationEmpty(servicio?.descripcion)}`,
      },
      {
        title: "Teléfono Remitente",
        description: `${validationEmpty(remitente?.telefono)}`,
      },
      {
        title: "Teléfono Destinatario",
        description: `${validationEmpty(destinatario?.telefono)}`,
      },
      {
        title: "Ciudad Origen",
        description: `${validationEmpty(remitente?.zonificacion?.ciudad)}`,
      },
      {
        title: "Ciudad Destino",
        description: `${validationEmpty(destinatario?.zonificacion?.ciudad)}`,
      },
      {
        title: "Observaciones",
        description: `${validationEmpty(observaciones)}`,
      },
      {
        title: "Producto",
        description: `${validationEmpty(producto?.abreviado_producto)}`,
      },
      {
        title: "Contenido",
        description: `${validationEmpty(contenido)}`,
      },
      {
        title: "Referencia",
        description: `${validationEmpty(referencia)}`,
      },
    ];

    setGeneralInfoConfig([...generalInfo]);
  };
  return {
    generalInfoConfig,
    handleConfigGeneralInfo,
  };
};

export default useConfigGeneralInfoTab;
