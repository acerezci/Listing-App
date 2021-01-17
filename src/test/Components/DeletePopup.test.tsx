import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { random } from "faker";
import DeletePopup from "../../Components/DeletePopup";
import { act } from "react-dom/test-utils";

describe("Delete Popup Test", () => {
  const mockOnString = random.word();
  const mockOnDeleteItem = jest.fn();
  const mockOnSetVisible = jest.fn();

  it("renders correctly", async () => {
    const { getByTestId } = render(
      <DeletePopup
        title={mockOnString}
        text={mockOnString}
        deleteItem={mockOnDeleteItem}
        setVisible={mockOnSetVisible}
      />,
    );

    const DeletePopupTitle = await getByTestId("deletepopup-title");
    const DeletePopupText = await getByTestId("deletepopup-text");

    expect(DeletePopupTitle.textContent).toBe(mockOnString);
    expect(DeletePopupText.textContent).toBe(mockOnString);
  });

  it("close the popup when you click the cancel button", async () => {
    const { getByTestId } = render(
      <DeletePopup
        title={mockOnString}
        text={mockOnString}
        deleteItem={mockOnDeleteItem}
        setVisible={mockOnSetVisible}
      />,
    );

    const DeletePopupCancelButton = await getByTestId("deletepopup-cancel");

    await act(async () => {
      fireEvent.click(DeletePopupCancelButton);
    });

    expect(mockOnSetVisible).toHaveBeenCalled();
  });

  it("delete item when you click the delete button", async () => {
    const { getByTestId } = render(
      <DeletePopup
        title={mockOnString}
        text={mockOnString}
        deleteItem={mockOnDeleteItem}
        setVisible={mockOnSetVisible}
      />,
    );

    const DeletePopupDeleteButton = await getByTestId("deletepopup-delete");

    await act(async () => {
      fireEvent.click(DeletePopupDeleteButton);
    });

    expect(mockOnDeleteItem).toHaveBeenCalled();
  });
});
