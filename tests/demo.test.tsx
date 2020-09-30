import React from "react";
import { render } from "@testing-library/react";

import Demo from "../src";

test("Demo component text", () => {
  expect(render(<Demo />).container.textContent).toEqual("demo");
});
