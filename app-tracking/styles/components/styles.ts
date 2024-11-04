import styled from "@emotion/styled";

export const StyledContainerRequestTracking = styled.div`
  width: 500px;
  height: 270px;
  background: #ffffff;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 8px;
  padding: 48px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledTitleRequestTracking = styled.label`
  text-align: center;
  font-size: 18px;
  color: #0a6bb6;
  font-weight: 500;
`;

export const StyledContainerButtonsRequestTracking = styled.div`
  width: 224px;
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const StyledContainerForm = styled.div`
  width: 224px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const StyledContainerMultiplesGuides = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const StyledBlueLabel = styled.label`
  color: #00adee;
  font-weight: 300;
  font-size: 16px;
  margin: 0 10px 0 0;
`;
