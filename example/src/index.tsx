import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom/client";
import { RadioGroup } from "react-radio-ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const options = [
  {
    label: "test1",
    value: "1",
  },
  {
    label: "test2",
    value: "2",
  },
  {
    label: "test3",
    value: "3",
  },
];
const Example: FunctionComponent = () => {
  const [value, setValue] = useState<string>("2");

  return (
    <div>
      <h2>React Radio TS default</h2>
      <RadioGroup
        direction="horizontal"
        name="group1"
        selectdValue={value}
        options={options}
        onChange={setValue}
      />
      <hr />
    </div>
  );
};

const ExampleGroup: FunctionComponent = () => {
  const [value, setValue] = useState<string>("2");

  return (
    <div>
      <h2>React Radio TS vertical</h2>
      <RadioGroup
        direction="vertical"
        name="group2"
        selectdValue={value}
        options={options}
        onChange={setValue}
      />
      <hr />
    </div>
  );
};

const ExampleTheme: FunctionComponent = () => {
  const [value, setValue] = useState<string>("2");

  return (
    <div>
      <h2>React Radio TS Theme</h2>
      <RadioGroup
        direction="horizontal"
        name="group6"
        selectdValue={value}
        options={options}
        onChange={setValue}
        theme={{
          checkedColor: "blue",
          checkedTextColor: "blue",
          color: "red",
          textColor: "black",
          size: 28,
          bordered: false,
        }}
      />
      <hr />
    </div>
  );
};

export default ExampleGroup;

root.render(
  <>
    <Example />
    <ExampleGroup />
    <ExampleTheme />
  </>
);
