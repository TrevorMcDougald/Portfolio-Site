import React from "react";
import { render } from "@testing-library/react";
import registerFaIcons from "../../../../utils/registerFaIcons";

import Header from "../Header";

registerFaIcons();

describe("Header Component", () => {
  test("renders Header component", () => {
    const title = "Trevor McDougald";
    render(<Header siteTitle={title} />);
  });
});
