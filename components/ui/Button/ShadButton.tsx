
import { Button } from "@/components/ui/button"
import "./button.scss"
import { Loader2 } from "lucide-react"
import { ShadButtonPropTypes } from "./button.types"

const ShadButton = ({ buttonText, variant, type, isDisabled, isLoading, onClick, icon }: ShadButtonPropTypes) => {
    console.log('type is', type)
    return (
        <>
            <Button
                className={`button__wrapper-${type}`}
                variant={variant}
                disabled={isDisabled}
                onClick={onClick}
                type="submit"
            >
                {isLoading && <Loader2 className="animate-spin" />}
                {buttonText}
                {icon}
            </Button>
        </>
    )
}

export default ShadButton
