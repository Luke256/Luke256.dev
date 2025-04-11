import CareerDot from "./CareerDot";
import Section from "./Section";
import careerList from "@/refdata/CareerList";

const Career = () => {
    return (
        <Section title="経歴">
            <div className="place-content-center">
                <div className="overflow-x-auto">
                    {careerList.map((career, index) => (
                        <div key={index} className="flex items-center">
                            <div className="text-sm text-gray-500 min-w-[5em] text-right pr-1">{career.date}</div>
                            <div className="min-w-[2em] max-w-[2em]">
                                <CareerDot important={career.important} />
                            </div>
                            <div className="pl-1 font-mono font-medium text-base whitespace-nowrap">{career.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Career;