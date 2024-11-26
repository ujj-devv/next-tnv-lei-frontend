import { ShadButtonType, ShadButtonVariant } from "./button.enums";

export type ShadButtonPropTypes = {
    buttonText: string;
    variant?: ShadButtonVariant;
    isDisabled?: boolean;
    type: ShadButtonType;
    isLoading?: boolean;
    onClick?: () => void;
  };
  