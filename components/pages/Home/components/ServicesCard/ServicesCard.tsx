import { ShadButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";
import { IoMdArrowForward } from "react-icons/io";
import { ServicesCardProps } from "./services-card.types";



const ServicesCard = ({ name, description, action }: ServicesCardProps) => {
  return (
    <div className="border-b border-[#B2DDD3] pb-8 mb-8">
      <h4 className="text-[#222222] text-2xl font-semibold mb-2">{name}</h4>
      <p className="text-[#9EA0A0] text-lg font-normal mb-4">{description}</p>
      <div className="w-fit">
        <ShadButton
          buttonText={action}
          type={ShadButtonType.PRIMARY}
          icon={<IoMdArrowForward className="text-white" />}
        />
      </div>

    </div>
  )
}

export default ServicesCard
