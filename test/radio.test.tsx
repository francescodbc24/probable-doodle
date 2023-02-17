import React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import RadioButton from "../src/components/radio";

describe("RadioButton render", () => {
  it("render without crashing", () => {
    render(
      <RadioButton
        label="My radio"
        name="group"
        value="myradio"
        checked={false}
        onChange={jest.fn()}
      />
    );
  });
});
