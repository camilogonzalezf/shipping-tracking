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
