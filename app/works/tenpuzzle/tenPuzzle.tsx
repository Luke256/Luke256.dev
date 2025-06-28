'use client';

import { SolveTenPuzzle } from "./util";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';

const TenPuzzleComponent = () => {
    const [valuesString, setValuesString] = useState("");
    const [target, setTarget] = useState(10);
    const [answer, setAnswer] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        if (valuesString) {
            const values = valuesString.split(',').map(Number).filter(n => !isNaN(n));
            setShowWarning(values.length >= 8);
            if (values.length > 0) {
                const answer = SolveTenPuzzle(values, target);
                setAnswer(answer);
            }
            else {
                setAnswer("");
            }
        }
    }, [valuesString, target]);

    return (
        <Section title="テンパズルソルバー" sideTree={false}>
            <label className="text-2xl font-bold mb-4">使用する数字(,区切り)</label>
            <input type="text" placeholder="1,2,3,4" value={valuesString} onChange={(e) => setValuesString(e.target.value)} className="w-full p-2 bg-gray-800 text-white rounded mb-4" />
            {showWarning && (
                <p className="text-yellow-500 mb-4">注意：計算が終わらない可能性があります！</p>
            )}
            <label className="text-2xl font-bold mb-4">目標の数</label>
            <input type="number" placeholder="Enter target number" value={target} onChange={(e) => setTarget(Number(e.target.value))} className="w-full p-2 bg-gray-800 text-white rounded mb-4" />

            <div className="text-lg sm:text-2xl md:text-5xl mb-4">
                {answer && (
                    <div className="overflow-x-auto">
                        <BlockMath>
                            {answer ? `${answer}` : "解が見つかりませんでした。"}
                        </BlockMath>
                    </div>
                )}

                {!answer && (
                    <p className="text-lg text-center">解が見つかりませんでした</p>
                )}
            </div>
        </Section>
    )
}

export default TenPuzzleComponent;