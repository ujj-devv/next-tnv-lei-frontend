import CardImage from "@/assets/svg/CardImage"

const LeiDetailCard = ({name, description}:{name:string,description:string}) => {
  return (
    <div className="">
      <div className="flex gap-2 mb-2">
        <CardImage/>
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
      <p className="text-[#9EA0A0] font-normal text-base">{description}</p>
    </div>
  )
}

export default LeiDetailCard
