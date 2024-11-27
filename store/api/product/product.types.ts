import { ProductType } from "./product.enums";

export interface ProductPackage {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    slug: string;
    description?: string ;
    category: string;
    packageDescription: string[];
    totalPrice: number;
    yearlyPrice: number;
    type:ProductType
  }
  

  