import React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import Radio from "../src/components/radio";

describe("RadioButton render", () => {
  it("render without crashing", () => {
    render(
      <Radio
        label="My radio"
        name="group"
        value="myradio"
        checked={false}
        onChange={jest.fn()}
        theme={{
          bordered: false,
          color: "grey",
          textColor: "grey",
          checkedColor: "darkgreen",
          checkedTextColor: "darkgreen",
          size: 24,
        }}
      />
    );
  });
});
