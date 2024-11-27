import { Input } from "@/components/ui/input"
import { ShadInputPropTypes } from "./input.types"
import "./input.scss"
import ShadLabel from "../Label/ShadLabel"

const ShadInput = ({ label, type, placeholder, name, onChange, value, required }: ShadInputPropTypes) => {
    return (
        <>
            <ShadLabel label={label} required={required} />
            <Input
                required={required}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="shadInput"
            />
        </>
    )
}

export default ShadInput
