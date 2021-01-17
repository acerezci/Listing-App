import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Header from "../../Components/Header";

describe("Header test", () => {
  it("renders the correct content", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
});
