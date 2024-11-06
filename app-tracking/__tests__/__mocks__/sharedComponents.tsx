export const Header = ({ onRouteIndexPage }: any) => {
  return (
    <div data-testid="header">
      <button data-testid="redirect-icon" onClick={onRouteIndexPage}>
        Redirect Icon
      </button>
    </div>
  );
};

export const Loader = () => {
  return <div data-testid="loader">Loader Mock</div>;
};

export const GeneralMenu = () => {
  return <div data-testid="general-menu">General Menu Mock</div>;
};

export const CustomButton = () => {
  return <div data-testid="custom-button">Custom button</div>;
};
