import { Label } from "@/components/ui/label"
import { ShadLabelPropTypes } from "./label.types"
import "./label.scss"

const ShadLabel = ({required, label}:ShadLabelPropTypes) => {
    return (
        <>
            <Label htmlFor={label} className="label__wrapper">
                {label}
                {required && <span className="required-asterisk">*</span>}
            </Label>
        </>
    )
}

export default ShadLabel
