import { use, useState } from "react";
import type { TechnologiesType } from "../../type";
import Technology from "./Technology";
import Selected from "./Selected";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../../index.css'

interface techProps {
    techPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ techPromise }: techProps) => {
    const technologies = use(techPromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologiesType[]>([]);
    const handleAddToStack = (technology: TechnologiesType) => {
        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: string) => {

        const remainingTechnologies = selectedTechnologies.filter(
            technology => technology.id !== id
        );

        setSelectedTechnologies(remainingTechnologies);

    };    
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
    };
    return (
        <div className="container mx-auto px-4">
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                        technologies.map((technology: TechnologiesType) => (
                            <Technology
                                key={technology.id}
                                technology={technology}
                                onAdd={handleAddToStack}
                                isSelected={selectedTechnologies.some(
                                    item => item.id === technology.id
                                )}
                            />
                        ))
                    }

                </div>
                <div>
                    <Selected
                        selectedTechnologies={selectedTechnologies}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>

            </div>

        </div>
    );
};

export default Technologies;