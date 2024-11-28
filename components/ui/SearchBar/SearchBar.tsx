import { ShadButtonType } from "../Button/button.enums";
import ShadButton from "../Button/ShadButton";
import { SearchBarPropType } from "./search-bar.types"


const SearchBar = ({ placeholder, value, customClass, onClick, onChange }: SearchBarPropType) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onClick();
        }
    };
    return (
        <div className={`flex items-center w-full bg-white p-2 border-1 rounded-lg shadow-md overflow-hidden ${customClass}`}>
            <input
                type="text"
                className="w-full text-gray-700 focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
            <div className="w-fit">
                <ShadButton buttonText={"Search"} type={ShadButtonType.PRIMARY} onClick={onClick} />
            </div>
        </div>
    )
}

export default SearchBar
