import { Textarea } from "@/components/ui/textarea"
import { ShadTextAreaPropTypes } from "./text-area.types"
import ShadLabel from "../Label/ShadLabel"
import "./text-area.scss"

const ShadTextArea = ({ label, placeholder, name, value, onChange, required }:ShadTextAreaPropTypes) => {
    return (
        <div>
            <ShadLabel label={label} required={required}/>
            <Textarea
                placeholder={placeholder}
                id={name}
                onChange={onChange}
                value={value}
                className="shadTextArea"
            />
        </div>
    )
}

export default ShadTextArea
