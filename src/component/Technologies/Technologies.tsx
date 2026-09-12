import { use } from "react";
import type { TechnologiesType } from "../../type";

interface techProps {
    techPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ techPromise }: techProps) => {
    const technologies = use(techPromise);
    
    return (
        <div>
            
        </div>
    );
};

export default Technologies;