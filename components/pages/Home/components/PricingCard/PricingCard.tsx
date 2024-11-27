import { ShadButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";
import { PricingCardPropType } from "./pricing-card.types";
import "./pricing-card.types"
import "./pricing-card.scss"
import CheckIcon from "@/assets/svg/CheckIcon";


const PricingCard = ({
    duration,
    price,
    total,
    features,
}: PricingCardPropType) => {
    return (
        <div className="pricingCard__wrapper">
            <h3 className="duration">
                {duration}
            </h3>
            <div className="perYearPrice">
                <p>Starting at</p>
                <h4 className="price">
                    {price} <span className="">/ year</span>
                </h4>
            </div>
            <div className="w-full mb-4">
                <ShadButton buttonText={"APPLY"} type={ShadButtonType.PRIMARY} />
            </div>
            <div className="features__wrapper">
                {features.map((item, index) => (
                    <div key={index} className="item__wrapper">
                        <div className="">
                            <CheckIcon />
                        </div>
                        <h3 className="item">
                            {item}
                        </h3>
                    </div>
                ))}
            </div>
            <div className="total__wrapper">
                Total
                <h2 className="total">{total}</h2>
            </div>
        </div>
    );
};

export default PricingCard;
