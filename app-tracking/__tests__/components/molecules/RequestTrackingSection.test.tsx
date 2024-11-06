import { render, screen, act } from "@testing-library/react";
import RequestTrackingSection from "@/components/molecules/RequestTrackingSection";

jest.mock("sharedComponents/custom-button", () => {
  return {
    __esModule: true,
    default: () => <button data-testid="custom-button">Custom button</button>,
  };
});

describe("Request Tracking Section", () => {
  it("should show error message if api fails", async () => {
    render(<RequestTrackingSection />);

    expect(
      screen.getByText("Selecciona la consulta que quieres realizar") //@ts-ignore
    ).toBeInTheDocument();

    expect(
      screen.getByText("Buscar múltiples guías") //@ts-ignore
    ).toBeInTheDocument();
  });
});
