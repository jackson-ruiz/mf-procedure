import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";

describe("Group of test for App component", () => {
  test("should render correctly", () => {
    const { getAllByRole, getByText } = render(<App />);
    expect(getAllByRole("tab").length).toBe(2);
    expect(getByText("Nuevo Trámite")).toBeInTheDocument();
    expect(getByText("Lista Trámites")).toBeInTheDocument();
  });
});
