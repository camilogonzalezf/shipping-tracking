import React, { useState } from "react";

/* Styles */
import {
  StyledContainerTerminalSelector,
  StyledContainerListTerminalSelect,
  StyledTerminalSelect,
  StyledContainerSelectedItem,
  StyledTerminalSelectOption,
} from "../styles";

/* icons */
import ArrowDown from "../icons/ArrowDown";

/* Interface */
import { TerminalsInterface, Terminal } from "@/interfaces/components";

const TerminalSelector: React.FC<TerminalsInterface> = ({ terminals }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <StyledContainerTerminalSelector>
      <label>Terminal:</label>
      <StyledTerminalSelect>
        <StyledContainerSelectedItem
          onClick={() => setShowOptions(!showOptions)}
          aria-label="Seleccione una opción de Terminal"
          aria-haspopup="true"
          aria-expanded={selectedOption ? "true" : "false"}
        >
          <label>{terminals?.[selectedOption]?.label}</label>
          <div>
            <ArrowDown />
          </div>
        </StyledContainerSelectedItem>
        {showOptions && (
          <StyledContainerListTerminalSelect>
            {terminals?.map((terminal: Terminal, index: number) => (
              <StyledTerminalSelectOption
                key={index}
                onClick={() => {
                  setSelectedOption(index);
                  setShowOptions(!showOptions);
                }}
              >
                {terminal?.label}
              </StyledTerminalSelectOption>
            ))}
          </StyledContainerListTerminalSelect>
        )}
      </StyledTerminalSelect>
    </StyledContainerTerminalSelector>
  );
};

export default TerminalSelector;
