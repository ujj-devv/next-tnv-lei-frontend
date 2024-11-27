
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ShadSelectOptionsType } from "./select.types"
import ShadLabel from "../Label/ShadLabel"
import "./select.scss"


const ShadSelect = ({ placeholder, options, label, onChange, value, required }: ShadSelectOptionsType) => {
    return (
        <>
            <ShadLabel label={label} required={required} />
            <div className="mt-[-12px] ">
                <Select onValueChange={onChange} value={value}  >
                    <SelectTrigger className="shadSelect___trigger">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            options.map(({ label, value }) => (
                                <SelectItem key={value} value={value}>{label}</SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </div>

        </>
    )
}

export default ShadSelect
