import React from "react";
import { render } from "@testing-library/react";

import Footer from "../../Components/Footer";

describe("Footer Test", () => {
  it("renders the correct content", () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId("footer")).toBeTruthy();
  });
});
