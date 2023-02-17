import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

export interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  theme: IRadioTheme;
  onChange?: (data: React.ChangeEvent<HTMLInputElement>) => void;
}

export type IRadioTheme = {
  checkedColor: string;
  checkedTextColor: string;
  color: string;
  textColor: string;
  size: number;
  bordered: boolean;
};

// const radio_theme: IRadioTheme = {
//   checkedColor: "darkgreen",
//   checkedTextColor: "darkgreen",
//   color: "grey",
//   textColor: "grey",
//   size: 16,
//   bordered: false,
// };

const Radio: FunctionComponent<RadioProps> = ({
  label,
  name,
  value,
  checked,
  theme,
  onChange,
}) => {
  const useStyles = createUseStyles({
    customRadio: () => ({
      cursor: " pointer",
      width: theme.size,
      height: theme.size,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: theme.color,
      borderRadius: "50%",
      display: "inline-block",
      top: "4px",
      left: "-8px",
      position: "relative",
      "&::after": {
        content: "''",
        width: `calc(${theme.size} /2 * 1px)`,
        height: `calc(${theme.size} /2 * 1px)`,
        background: theme.checkedColor,
        position: "absolute",
        borderRadius: " 50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
      },
    }),
    radioLabel: () => ({
      color: theme.textColor,
      fontSize: `calc(${theme.size} * 1px)`, //label font size
      borderWidth: "1px",
      borderStyle: theme.bordered ? "solid" : "none",
      borderColor: theme.color,
      borderRadius: "0%",
      padding: "4px",
      marginRight: "4px",
      marginBottom: "5px",
      " -webkit-tap-highlight-color": "transparent",
      cursor: "pointer",
    }),
    radioLabelChecked: () => ({
      color: theme.checkedTextColor, //label color
      fontSize: `calc(${theme.size} * 1px)`, //label font size
      borderWidth: "1px",
      borderStyle: theme.bordered ? "solid" : "none",
      borderColor: theme.checkedColor,
      borderRadius: "0%",
      padding: "4px",
      marginRight: "4px",
      marginBottom: "4px",
      " -webkit-tap-highlight-color": "transparent",
      cursor: "pointer",
    }),
    radioInput: () => ({
      margin: "0",
      visibility: "hidden",
      "&:checked + span": {
        borderWidth: `calc(${"1"} / 1 * 1px)`,
        borderStyle: "solid",
        borderColor: theme.checkedColor,
      },
      "&:checked + span:after": {
        opacity: 1,
      },
    }),
  });
  const classes = useStyles();
  return (
    <label
      htmlFor={`radio-${name}-1-${label}`}
      className={checked ? classes.radioLabelChecked : classes.radioLabel}
    >
      <input
        className={classes.radioInput}
        type="radio"
        name={name}
        id={`radio-${name}-1-${label}`}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={classes.customRadio} />
      {label}
    </label>
  );
};

export default Radio;
