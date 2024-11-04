export interface Terminal {
  code: number | null;
  label: string | null;
}

export interface TerminalsInterface {
  terminals: Terminal[];
}

export interface HeaderInterface {
  personName: string;
  terminals: Terminal[];
  onRouteIndexPage: () => void;
}

export interface SearchFieldHeaderInterface {
  showTextField: boolean;
  hiddenMobile?: boolean;
  onSetShowTextField: (value: boolean) => void;
}

export interface CustomButtonInterface {
  buttonId: number;
  label: string;
  icon: string;
  buttonIdSelected: number;
  onSetButtonIdSelected: (value: number) => void;
}

export interface KeyBoardEnterFormInterface {
  initialValues: any;
  validationSchema: any;
  handleSubmit: (value: string) => void;
  placeHolder: string;
  disabled?: boolean;
}

export interface TrackingInformationInterface {
  trackingCode: string;
  unities: any;
  macroState: any;
  trackingState: string;
}

interface TrackingTimeLineObjectInterface {
  codigo: string | null;
  descripcion: string | null;
  fecha: string | null;
  hora: string | null;
  internacional: boolean | null;
}

export interface TrackingTimeLineInterface {
  trackingStates: TrackingTimeLineObjectInterface[] | [];
}
