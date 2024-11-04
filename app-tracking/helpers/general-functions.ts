export const configTerminalList = (terminalsList: any) => {
  const terminalsListConfig: any = [];
  if (terminalsList?.length) {
    terminalsList?.map((terminal: any) => {
      let label = terminal?.codigo_terminal + "-" + terminal?.abreviado;

      if (terminal.codigo_terminal < 10) {
        label = "0" + label;
      }

      const objectOption = {
        code: terminal?.codigo_terminal,
        label: label,
      };

      terminalsListConfig.push(objectOption);
    });
  }

  terminalsListConfig.sort((a: any, b: any) => a.code - b.code);

  return terminalsListConfig;
};
