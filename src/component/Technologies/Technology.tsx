
import type { TechnologiesType } from "../../type";

interface TechnologyProps {
    technology: TechnologiesType;
    onAdd: (technology: TechnologiesType) => void;
    isSelected: boolean;
}

const Technology = ({
    technology,
    onAdd,
    isSelected
}: TechnologyProps) => {
    return (
        <div className={`rounded-xl p-4 shadow-sm border ${isSelected? "border-pink-500" : 'border-gray-200'}`}>

            <div className="flex justify-between items-center mb-4">

                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10 object-contain"
                />

                <span className="text-xs bg-blue-50 text-blue-500 px-3 py-1 rounded-full">
                    {technology.badge}
                </span>

            </div>

            <h2 className="text-xl font-semibold mb-2">
                {technology.name}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
                {technology.description}
            </p>

            <div className="flex justify-between items-center border-t border-gray-100 pt-3 mb-4">

                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {technology.category}
                </span>
                <span className="text-xs text-gray-600  px-2 py-1 rounded">{technology.difficulty}</span>
                <span className="text-sm">
                    ⭐ {technology.rating}
                </span>

            </div>

            <button
                onClick={() => onAdd(technology)}
                disabled={isSelected}
                className={`w-full py-2 rounded-lg text-sm font-medium transition
                    ${
                        isSelected
                            ? "bg-pink-300 text-pink-900 cursor-not-allowed"
                            : "bg-[#080d1c] text-white hover:bg-gray-800 cursor-pointer"
                    }
                `}
            >
                {isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};

export default Technology;