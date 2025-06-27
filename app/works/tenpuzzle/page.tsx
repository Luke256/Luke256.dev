'use client';

import HeadBar from "@/components/HeadBar";
import { SolveTenPuzzle } from "./util";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import { BlockMath } from "react-katex";
import 'katex/dist/katex.min.css';


const TenPuzzlePage = () => {
    const [valuesString, setValuesString] = useState("");
    const [target, setTarget] = useState(10);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if (valuesString) {
            const values = valuesString.split(',').map(Number).filter(n => !isNaN(n));
            if (values.length > 0) {
                const answer = SolveTenPuzzle(values, target);
                setAnswer(answer);
            }
        }
    }, [valuesString, target]);

    return (
        <main>
            <HeadBar />
            <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
                <Section title="10パズル" sideTree={false}>
                    <label className="text-2xl font-bold mb-4">使用する数字(,区切り)</label>
                    <input type="text" placeholder="1,2,3,4" value={valuesString} onChange={(e) => setValuesString(e.target.value)} className="w-full p-2 bg-gray-800 text-white rounded mb-4" />
                    <label className="text-2xl font-bold mb-4">目標の数</label>
                    <input type="number" placeholder="Enter target number" value={target} onChange={(e) => setTarget(Number(e.target.value))} className="w-full p-2 bg-gray-800 text-white rounded mb-4" />

                    <div className="text-lg sm:text-2xl md:text-5xl mb-4">
                        {answer && (
                        <BlockMath>
                            {answer ? `${answer}` : "解が見つかりませんでした。"}
                        </BlockMath>
                        )}

                        {!answer && (
                            <p className="text-lg text-center">解が見つかりませんでした</p>
                        )}
                    </div>
                </Section>
            </div>
        </main>
    )
}

export default TenPuzzlePage;