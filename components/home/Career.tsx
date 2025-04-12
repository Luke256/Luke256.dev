'use client'

import CareerDot from "@/components/svg/CareerDot";
import Section from "@/components/Section";
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
            <div className="place-content-center overflow-x-auto w-full">
                <table className="table-fixed">
                    <tbody className="">
                        <tr>
                            <td className=""></td>
                            <td className="min-w-[2em] max-w-[2em] inline-block">
                                <CareerDash />
                            </td>
                            <td>
                                <button className="flex w-full rounded-md hover:bg-gray-100/10 transition duration-200 ease-in-out cursor-pointer" onClick={toggleCollapse}>
                                    <div className="font-mono font-medium text-base whitespace-nowrap w-full text-left">
                                        {Collapsed ? "Show All" : "Collapse"}
                                    </div>
                                </button>
                            </td>
                        </tr>
                        {careerList.map((career: Career, index: number) => (
                            <tr key={index} className={"" + (Collapsed && !CollapseMask[index] ? "hidden" : "")}>
                                <td className="font-mono text-sm text-gray-500 text-right min-w-[6em] flex-none h-fit">{career.date}</td>
                                <td className="min-w-[2em] max-w-[2em] inline-block">
                                    <CareerDot important={career.important} />
                                </td>
                                <td className="font-mono font-medium text-base whitespace-nowrap w-full">{career.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Section>
    )
}

export default Career;