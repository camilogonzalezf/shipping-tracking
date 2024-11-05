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

export const StyledContainerTrackingInformation = styled.div`
  padding: 0 50px 0 50px;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledErrorMessage = styled.h3`
  color: #0a6bb6;
  font-weight: 300;
  margin-right: 10px;
  margin-left: 10px;
`;

export const StyledErrorList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
  color: #666666;
  margin-top: -10px;
  padding-left: 35px;
  li {
    color: #666666;
    margin-bottom: 8px;
  }

  li::marker {
    color: #999999;
  }
`;
