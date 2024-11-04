export interface TerminalInterface {
  codigo_terminal: number | null;
  codigo_centro: string | null;
  nombre: string | null;
  abreviado: string | null;
  codigo_ciudad: string | null;
  direccion: string | null;
  telefono: string | null;
  codigo_postal: string | null;
  operativo: boolean | null;
  latitud: string | null;
  longitud: string | null;
  nombre_ministerio: string | null;
  activo: boolean | null;
}

export interface TerminalsListSliceInterface {
  obtainsTerminals: boolean;
  terminalsList: Array<TerminalInterface> | [];
  error: string | null;
}

export interface TerminalsListInterface {
  terminalsList: Array<TerminalInterface> | [];
}

interface TrackingObjectInterface {
  reconstruido: any;
  remesas: any;
  guia: any;
  cliente: any;
  remitente: any;
  destinatario: any;
  fecha_hora_recogida: any;
  fecha_hora_entrega: any;
  producto: any;
  servicio: any;
  guia_liquidada: any;
  recaudo_anulado: any;
  valor_recaudo_contra_entrega: any;
  peso: any;
  volumen: any;
  alto: any;
  ancho: any;
  largo: any;
  flete: any;
  valor_declarado: any;
  total_unidades: any;
  total_unidades_declarado: any;
  referencia: any;
  observaciones: any;
  factura: any;
  fuente_guia: any;
  medios_pago: any;
  codigo_grupo_planilla: any;
  tipoguia: any;
  abreviado_cuenta: any;
  unidades: any;
  contenido: any;
  codigo_vinculo: any;
  firma_guia: any;
}

export interface TrackingInfoInterface {
  obtainsTrackingInfo: boolean;
  trackingInfo: TrackingObjectInterface | null;
  error: string | null;
}

interface TrackingStateObjectInterface {
  estado: any;
  novedad: any;
  guias: any;
  reportes: any;
}

export interface TrackingStateInterface {
  obtainsTrackingState: boolean;
  trackingState: TrackingStateObjectInterface | null;
  error: string | null;
}
