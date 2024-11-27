import { ProductType } from "@/store/api/product/product.enums";
import { Dispatch, SetStateAction } from "react";

export type ShadToggleGroupItemsType = {
  id: number;
  text: string;
  type: ProductType;
};
export type ShadToggleGroupPropType = {
  items: ShadToggleGroupItemsType[];
  activeValue: string;
  handleValueChange: Dispatch<SetStateAction<ProductType>>
};
