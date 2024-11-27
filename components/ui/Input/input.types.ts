import { InputType } from "zlib";
import { InputVariant } from "./input.enums";

export type InputPropTypes = {
  id: string;
  label: string;
  variant: InputVariant;
  disabled: boolean;
  value: string;
  type: InputType;
  required?: boolean;
  name: string;
  isMultiline?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  isError?: boolean;
  helperText?: string;
  placeholder: string;
};

export type ShadInputPropTypes = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required?:boolean
};
