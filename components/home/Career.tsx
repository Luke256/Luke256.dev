'use client'

import CareerDot from "@/components/svg/CareerDot";
import Section from "./Section";
import careerList from "@/refdata/CareerList";
import type { Career } from "@/refdata/CareerList";
import CareerDash from "../svg/CareerDash";
import { useState } from "react";

const getCollapseMask = () => {
    const limit = 5;
    // importantを優先して表示し、合計がlimitを超えないようにする
    // 返り値は、表示するかどうかのbooleanの配列
    const mask = new Array(careerList.length).fill(false);
    let count = 0;
    for (let i = careerList.length - 1; i >= 0; i--) {
        if (count >= limit) break;
        if (careerList[i].important) {
            mask[i] = true;
            count++;
        }
    }
    for (let i = careerList.length - 1; i >= 0; i--) {
        if (mask[i]) continue;
        if (count >= limit) break;
        mask[i] = true;
        count++;
    }

    return mask;
}

const Career = () => {
    const [Collapsed, setCollapsed] = useState(true);
    const CollapseMask = getCollapseMask();

    const toggleCollapse = () => {
        setCollapsed(!Collapsed);
    }

    return (
        <Section title="経歴">
            <div className="place-content-center overflow-x-auto">
                <button className="flex w-full rounded-md hover:bg-gray-100/10 transition duration-200 ease-in-out cursor-pointer" onClick={toggleCollapse}>
                    <div className="text-sm text-gray-500 min-w-[6em] text-right pr-1"></div>
                    <div className="min-w-[2em] max-w-[2em]">
                        <CareerDash />
                    </div>
                    <div className="font-mono font-medium content-center">
                        <span className="align-middle">
                            {Collapsed ? "Show All" : "Collapse"}
                        </span>
                    </div>
                </button>
                <table>
                    <tbody>
                        {careerList.map((career: Career, index: number) => (
                            <tr key={index} className={"h-fit " + (Collapsed && !CollapseMask[index] ? "collapse" : "")}>
                                <td className="text-sm text-gray-500 text-right min-w-[6em]">{career.date}</td>
                                <td className="min-w-[2em] max-w-[2em]">
                                    <CareerDot important={career.important} />
                                </td>
                                <td className="font-mono font-medium text-base whitespace-nowrap">{career.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <div className="overflow-x-auto">
                    <button className="flex items-center w-full rounded-md hover:bg-gray-100/10 transition duration-200 ease-in-out cursor-pointer" onClick={toggleCollapse}>
                        <div className="text-sm text-gray-500 min-w-[5em] text-right pr-1"></div>
                        <div className="min-w-[2em] max-w-[2em]">
                            <CareerDash />
                        </div>
                    </button>
                    {careerList.map((career, index) => (
                        <div key={index} className={"flex items-center " + (Collapsed && !CollapseMask[index] ? "collapse" : "visible")}>
                            <div className="text-sm text-gray-500 min-w-[5em] text-right pr-1">{career.date}</div>
                            <div className="min-w-[2em] max-w-[2em]">
                                <CareerDot important={career.important} />
                            </div>
                            <div className="pl-1 font-mono font-medium text-base whitespace-nowrap">{career.description}</div>
                        </div>
                    ))}
                </div> */}
            </div>
        </Section>
    )
}

export default Career;