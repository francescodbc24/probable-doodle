import React, { FunctionComponent } from "react";
import Radio, { IRadioTheme } from "./radio";

type IDirection = "horizontal" | "vertical";

type IRadioOptions = {
  label: string;
  value: string;
  [key: string]: string;
};
interface RadioGroupProps {
  name: string;
  selectdValue?: string | number | boolean;
  options: IRadioOptions[];
  direction?: IDirection;
  theme?: IRadioTheme;
  onChange?: (value: string) => void;
}

const radio_theme: IRadioTheme = {
  checkedColor: "darkgreen",
  checkedTextColor: "darkgreen",
  color: "grey",
  textColor: "grey",
  size: 20,
  bordered: false,
};

const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  name,
  selectdValue,
  options,
  direction,
  onChange,
  theme,
}) => {
  const handleChangeRadio = (data: React.ChangeEvent<HTMLInputElement>) => {
    const value = data.currentTarget["value"];
    onChange && onChange(value);
  };
  const _direction = direction && direction == "vertical" ? "column" : "row";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: _direction,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {options.map((radio, index) => (
        <Radio
          key={`${name}-${index}`}
          name={name}
          label={radio.label}
          value={radio.value}
          checked={selectdValue && radio.value == selectdValue ? true : false}
          onChange={handleChangeRadio}
          theme={theme ? theme : radio_theme}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
