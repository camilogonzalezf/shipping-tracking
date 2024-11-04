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
}

export interface SearchFieldHeaderInterface {
  showTextField: boolean;
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
