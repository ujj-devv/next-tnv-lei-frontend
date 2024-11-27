
interface ApplyingCardProps {
    id: string;
    name: string;
    description: string;
}

const ApplyingCard = ({ id, name, description }: ApplyingCardProps) => {
    return (
        <div className="flex overflow-hidden w-full">
            {/* Left side with ID */}
            <div className="text-8xl font-bold text-transparent flex items-center" style={{ WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#F3FAF8' }}>
                {id}
            </div>
            {/* Right side with name and description */}
            <div className="flex flex-col p-4 w-3/4">
                <h3 className="text-lg font-semibold text-[#B2DDD3] text-left">{name}</h3>
                <p className="text-[#F3FAF8] mt-2 text-left">{description}</p>
            </div>
        </div>
    );
};

export default ApplyingCard;
