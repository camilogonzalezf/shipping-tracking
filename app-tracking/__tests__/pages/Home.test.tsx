import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Home from "@/pages";
import mockAxios from "jest-mock-axios";

describe("Home page", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  jest.mock("sharedComponents/header", () => {
    return {
      __esModule: true,
      default: ({ onRouteIndexPage }: any) => (
        <div data-testid="header">
          <button data-testid="redirect-icon" onClick={onRouteIndexPage}>
            Header mock
          </button>
        </div>
      ),
    };
  });

  it("should render header", async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: {
        data: [],
        isError: false,
        message: "Terminales obtenidas correctamente",
        no_results: "",
        records: 223,
      },
      status: 200,
      statusText: "OK",
    });

    await act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    const headerMocks = screen.queryAllByText("Header mock");
    expect(headerMocks.length).toBeGreaterThan(0);
  });

  it("should render request tracking form", async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: {
        data: [],
        isError: false,
        message: "Terminales obtenidas correctamente",
        no_results: "",
        records: 223,
      },
      status: 200,
      statusText: "OK",
    });

    await act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });

    // @ts-ignore
    expect(screen.getByTestId("request-tracking-form")).toBeInTheDocument();
  });

  it("should call to terminal api", async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: {
        data: [],
        isError: false,
        message: "Terminales obtenidas correctamente",
        no_results: "",
        records: 223,
      },
      status: 200,
      statusText: "OK",
    });

    await act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
    //@ts-ignore
    expect(screen.getByTestId("request-tracking-form")).toBeInTheDocument();

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/cm-maestros-territorios-ms/api/v1/terminales"
    );
  });

  it("should show error message if api fails", async () => {
    mockAxios.get.mockRejectedValueOnce(new Error("API error"));

    await act(() => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });

    expect(
      screen.getByText("No fue posible cargar la lista de Terminales") //@ts-ignore
    ).toBeInTheDocument();
  });
});
