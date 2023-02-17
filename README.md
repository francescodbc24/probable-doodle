
# react-radio-ts

React radio.

[**Live Demo**](https://francescodbc24.github.io/react-radio-package/)

## Installation:

```bash
npm install react-radio-ts
```

or

```bash
yarn add -D react-radio-ts
```

## Usage :

Add `RadioGroup` to your component:

```js
import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom/client";
import { RadioGroup } from "react-radio-ts";

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

```
