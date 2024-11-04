import styled from "@emotion/styled";

export const StyledContainerGeneralMenuMobile = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: end;
  }
`;

export const StyledContainerInformation = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;
