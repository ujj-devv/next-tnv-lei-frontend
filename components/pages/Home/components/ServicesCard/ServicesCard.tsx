import { ShadButtonType } from "@/components/ui/Button/button.enums";
import ShadButton from "@/components/ui/Button/ShadButton";

interface ServicesCardProps {
  action: string;
  name: string;
  description: string;
}

const ServicesCard = ({ name, description, action }: ServicesCardProps) => {
  return (
    <div className="border-b border-[#B2DDD3] pb-8 mb-8">
      <h4 className="text-[#222222] text-2xl font-semibold mb-2">{name}</h4>
      <p className="text-[#9EA0A0] text-lg font-normal mb-4">{description}</p>
      <ShadButton buttonText={action} type={ShadButtonType.PRIMARY}/>
      {/* <Button
        onClick={() => ""}
        type={ButtonType.PRIMARY}
        text={action}
        icon={<ForwardArrowIcon fillColor="white" />}
        customStyles="font-semibold text-lg"
      /> */}
    </div>
  )
}

export default ServicesCard
