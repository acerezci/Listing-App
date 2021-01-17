import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { random } from "faker";

import Item from "../../Components/Item";

describe("Item Test", () => {
  const mockOnItem = {
    linkName: random.word(),
    id: random.number(),
    vote: random.number(),
    createdDate: random.word(),
  };
  const mockOnSetVisibleToastrMessage = jest.fn();
  const mockOnSetData = jest.fn();

  it("renders correctly", async () => {
    const { getByTestId } = render(
      <Item
        setData={mockOnSetData}
        item={mockOnItem}
        setVisibleToastrMessage={mockOnSetVisibleToastrMessage}
      />,
    );

    const ItemLinkName = await getByTestId("item-link-name");
    expect(ItemLinkName.textContent).toBe(mockOnItem.linkName);

    const ItemCreatedDate = await getByTestId("item-created-date");
    expect(ItemCreatedDate.textContent).toBe(`Created Date : ${mockOnItem.createdDate}`);

    const ItemVote = await getByTestId("item-vote");
    expect(ItemVote.textContent).toBe(`Vote : ${mockOnItem.vote}`);
  });
});
