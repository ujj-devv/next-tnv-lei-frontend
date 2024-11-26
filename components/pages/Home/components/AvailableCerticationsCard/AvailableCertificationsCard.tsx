interface AvailableCertificationsCardPropType {
    name: string;
    status: string;
}

const AvailableCertificationsCard = ({ name, status }: AvailableCertificationsCardPropType) => {
  return (
    <div className=" rounded-md w-[200px] h-[255px] flex flex-col overflow-hidden">
      {/* Top White Section (70% height) */}
      <div className="bg-white flex-grow-[7]"></div>

      {/* Bottom Yellow Section (30% height) */}
      <div className="bg-[#65648B] flex flex-col justify-center items-center p-4">
        <h2 className="text-white text-[28px] font-medium">{name}</h2>
        <h4 className="text-white text-base font-normal uppercase">{status}</h4>
      </div>
    </div>
  );
}

export default AvailableCertificationsCard;
