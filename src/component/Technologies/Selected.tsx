import type { TechnologiesType } from "../../type";

interface SelectedProps {
    selectedTechnologies: TechnologiesType[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const Selected = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll
}: SelectedProps) => {

    return (
        <div className="border border-gray-200 rounded-xl p-4 shadow-sm">
            <h2 className="text-xl font-semibold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-400 mt-1">
                {selectedTechnologies.length} Technology Selected
            </p>

            {
                selectedTechnologies.length === 0 ? (

                    <div className="border border-dashed border-gray-300 rounded-lg py-8 mt-4 text-center">

                        <p className="text-sm text-gray-400">
                            Your stack is empty.
                        </p>

                    </div>

                ) : (

                    <>

                        <div className="space-y-2 mt-4">

                            {
                                selectedTechnologies.map((technology) => (

                                    <div
                                        key={technology.id}
                                        className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                                    >

                                        <div className="flex items-center gap-3">
                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-8 h-8 object-contain"
                                            />

                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    {technology.name}
                                                </h3>

                                                <p className="text-xs text-gray-400">
                                                    {technology.category}
                                                </p>
                                            </div>

                                        </div>

                                        <button
                                            onClick={() => onRemove(technology.id)}
                                            className="text-sm cursor-pointer"
                                        >
                                            ❌
                                        </button>

                                    </div>

                                ))
                            }

                        </div>

                        <button
                            onClick={onRemoveAll}
                            className="cursor-pointer w-full border border-red-300 text-red-500 font-bold py-2 rounded-lg mt-5 hover:bg-red-50"
                        >
                            Remove All
                        </button>

                    </>

                )
            }

        </div>
    );
};

export default Selected;