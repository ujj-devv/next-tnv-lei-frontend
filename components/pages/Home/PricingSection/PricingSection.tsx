import Layout from "@/components/global/Layout/Layout";
import { useGetProductsQuery } from "@/store/api/product/product";
import { useState } from "react";
import PricingCard from "../components/PricingCard/PricingCard";
import { ShadToggleGroup } from "@/components/ui/ToggleGroup/ShadToggleGroup";
import { ProductType } from "@/store/api/product/product.enums";
import "./pricing-section.scss"

const ToggleGroupItems = [
    { id: 1, text: "Application price", type: ProductType.APPLICATION },
    { id: 2, text: "Renewal price", type: ProductType.RENEWAL },
];

const PricingSection = () => {
    const [activeButton, setActiveButton] = useState(ProductType.APPLICATION);
    const { data: pricing } = useGetProductsQuery();

    const applicationProducts = pricing?.data?.filter((item) => item.type === ProductType.APPLICATION)
    const renewalProducts = pricing?.data?.filter((item) => item.type === ProductType.RENEWAL)
    return (
        <>
            <div className="pricingSection__wrapper">
                <Layout>
                    <h1 className="mainHeading">
                        Simple and <span className="">transparent</span>{" "}
                        pricing
                    </h1>
                    <p className="para">
                        TNV LEI enables you to apply for a code for up to five years. TNV
                        LEI s customers only pay for applying for or renewal of the LEI
                        code. Updating data, transferring the LEI code or other activities
                        related to the code are all free of charge for our customers.
                    </p>
                </Layout>
            </div>
            <div className="px-16">
                <Layout>
                    <div className="flex justify-center md:justify-end gap-4">
                        <ShadToggleGroup
                            items={ToggleGroupItems}
                            activeValue={activeButton}
                            handleValueChange={setActiveButton}
                        />
                    </div>
                </Layout>
            </div>
            <Layout>
                <div className="flex flex-col md:flex-row gap-6 md:px-8 py-8">
                    {activeButton === ProductType.APPLICATION
                        ? applicationProducts?.map(
                            ({ slug, packageDescription, title, totalPrice, yearlyPrice }) => (
                                <PricingCard
                                    key={slug}
                                    duration={title}
                                    price={yearlyPrice}
                                    total={totalPrice}
                                    features={packageDescription}
                                />
                            )
                        )
                        : renewalProducts?.map(
                            ({ slug, packageDescription, title, totalPrice, yearlyPrice }) => (
                                <PricingCard
                                    key={slug}
                                    duration={title}
                                    price={yearlyPrice}
                                    total={totalPrice}
                                    features={packageDescription}
                                />
                            )
                        )}
                </div>
            </Layout>
        </>
    );
};

export default PricingSection;
