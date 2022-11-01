import React from "react";
import TextBox from "./TextBox";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Group of test for TextBox component", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
  });

  afterEach(() => {
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  test("should render correctly", () => {
    const idValue = "textboxId";
    const labelValue = "TextBox Sample";
    const typeValue = "text";
    render(<TextBox id={idValue} label={labelValue} type={typeValue} />);
    expect(screen.getByRole("textbox").id).toBe(idValue);
    expect(screen.getAllByText(labelValue).length).toBe(2);
    expect(screen.getByRole("textbox").type).toBe(typeValue);
  });

  test("should when typing the value should change", () => {
    const idValue = "textboxId";
    const labelValue = "TextBox Sample";
    const typeValue = "text";
    const defaultValue = "Default Value";
    const newDefaultValue = "New Default Value";
    const changeFunction = jest.fn();

    render(
      <TextBox
        id={idValue}
        label={labelValue}
        type={typeValue}
        defaultValue={defaultValue}
        changeAction={changeFunction}
      />
    );
    const inputField = screen.getByRole("textbox");
    fireEvent.change(inputField, { target: { value: newDefaultValue } });
    // screen.debug();
    expect(inputField.value).not.toBe(defaultValue);
    expect(inputField.value).toBe(newDefaultValue);
  });
});
