
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ShadToggleGroupPropType } from "./toggle-group.types"
import ShadButton from "../Button/ShadButton"
import { ShadButtonType } from "../Button/button.enums"
import { ProductType } from "@/store/api/product/product.enums"

export function ShadToggleGroup({ items, activeValue, handleValueChange }: ShadToggleGroupPropType) {
    console.log('activeValue', activeValue)
    return (
        <ToggleGroup
            type="single"
            value={activeValue}
            onValueChange={(value:ProductType) => handleValueChange(value)}
        >
            {
                items.map(({ id, text, type }) => (
                    <ToggleGroupItem key={id} value={type} aria-label="Price toggle">
                        <ShadButton buttonText={text} type={activeValue === type ? ShadButtonType.PRIMARY : ShadButtonType.INACTIVE} />
                    </ToggleGroupItem>

                ))
            }
        </ToggleGroup>
    )
}
