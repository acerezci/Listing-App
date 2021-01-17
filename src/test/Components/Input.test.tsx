import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { random } from "faker";

import Input from "../../Components/Input";

describe("Input Test", () => {
  const mockOnChange = jest.fn();
  const mockOnString = random.word();

  it("renders correctly", () => {
    const { queryByPlaceholderText } = render(
      <Input
        type="text"
        onChange={mockOnChange}
        label={mockOnString}
        labelClass={mockOnString}
        placeholder={mockOnString}
        containerClass={mockOnString}
        inputClass={mockOnString}
        id={mockOnString}
        name={mockOnString}
        value={mockOnString}
      />,
    );

    expect(queryByPlaceholderText(mockOnString)).toBeTruthy();
  });

  it("updates on change", async () => {
    const { queryByPlaceholderText, findByTestId } = render(
      <Input
        type="text"
        onChange={mockOnChange}
        label={mockOnString}
        labelClass={mockOnString}
        placeholder={mockOnString}
        containerClass={mockOnString}
        inputClass={mockOnString}
        id={mockOnString}
        name={mockOnString}
        value={mockOnString}
      />,
    );

    const InputBox = await findByTestId("input");

    fireEvent.change(InputBox, { target: { value: mockOnString } });

    expect(queryByPlaceholderText(mockOnString)).toBeTruthy();
  });
});
