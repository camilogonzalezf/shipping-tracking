import { StyledLoader, SpinnerContainer } from "@/styles/components/styles";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <StyledLoader>
      <SpinnerContainer>
        <CircularProgress size={60} thickness={4} color="primary" />
      </SpinnerContainer>
    </StyledLoader>
  );
};

export default Loader;
