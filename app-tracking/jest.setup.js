import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import dotenv from "dotenv";

dotenv.config();

jest.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
}));
