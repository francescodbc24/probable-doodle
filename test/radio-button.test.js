import React from "react";
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import RadioButton from "../src/components/radio-button";
describe("RadioButton render", function () {
    it("render without crashing", function () {
        render(React.createElement(RadioButton, { label: "My radio", name: "group", value: "myradio", checked: false, onChange: jest.fn() }));
    });
});
//# sourceMappingURL=radio-button.test.js.map