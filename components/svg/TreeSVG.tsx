'use client';

import { useEffect, useState } from "react";

type Props = {
    className: string;
    aspectRatio?: number;
    invert?: boolean;
}

type Tree = {
    Vertex: number[][],
    Edges: number[][],
    colors: string[]
};

const genTree = (Width: number, Height: number, Nodes: number, invert: boolean) => {
    let Vertex = [[0.5, Height - 1]];
    const Edges_: number[][] = [];

    while (Vertex.length < Nodes)
    {
        const r1 = Math.random();
        const r2 = Math.random();
        const x = r1 * Math.sqrt(1-r2) * (Width - 3) + 2 * (1 - r2);
        const y = r2 * (Height - 1);
        
        let isValid = true;
        for (let i = 0; i < Vertex.length; i++)
        {
            const dx = Vertex[i][0] - x;
            const dy = Vertex[i][1] - y;
            const dist = Math.sqrt(dx ** 2 + dy ** 2);
            if (dist < 1) 
            {
                isValid = false;
                break;
            }
        }
        if (isValid)
        {
            Vertex.push([x, y]);
        }
    }

    if (invert)
    {
        Vertex = Vertex.map((v) => [Width - v[0], v[1]]);
    }

    // tree Edges
    for (let i = 1; i < Nodes; i++)
    {
        let bestScore = Infinity;
        let idx = -1;
        for (let j = 0; j < Nodes; j++)
        {
            if (i === j) continue;
            if (Vertex[j][1] < Vertex[i][1]) continue;

            const dx = Vertex[j][0] - Vertex[i][0];
            const dy = Vertex[j][1] - Vertex[i][1];
            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (Vertex[j][0] < Vertex[j][0] * 2) dist *= 1000;
            
            if (dist < bestScore)
            {
                bestScore = dist;
                idx = j;
            }
        }
        if(idx != -1) Edges_.push([idx, i]);
    }

    // nearlest neighbor edges
    for (let i = 0; i < Nodes; i++)
    {
        let bestScore = Infinity;
        let idx = -1;
        for (let j = 0; j < Nodes; j++)
        {
            if (i === j) continue;

            const dx = Vertex[j][0] - Vertex[i][0];
            const dy = Vertex[j][1] - Vertex[i][1];
            const dist = Math.sqrt(dx ** 2 + dy ** 2);
            
            if (dist < bestScore)
            {
                bestScore = dist;
                idx = j;
            }
        }
        Edges_.push([i, idx]);
    }
    // remove duplicate edges
    const uniqueEdges = new Set<string>();
    const filteredEdges: number[][] = [];
    for (const edge of Edges_) {
        const edgeString = edge[0] < edge[1] ? `${edge[0]}-${edge[1]}` : `${edge[1]}-${edge[0]}`;
        if (!uniqueEdges.has(edgeString)) {
            uniqueEdges.add(edgeString);
            filteredEdges.push(edge);
        }
    }
    const Edges = filteredEdges;

    const colors: string[] = []
    for (let i = 0; i < Nodes; i++)
    {
        const r = Math.random();
        if (r < 0.5) colors.push("white");
        else if (r < 0.7) colors.push("orange");
        else colors.push("yellow");
    }

    return { Vertex, Edges, colors };
}

const TreeSVG = ({ className, aspectRatio, invert }: Props) => {
    const Width = 16;
    const Height = Width * (aspectRatio ? aspectRatio : 1);
    const Nodes = 48;

    const [{ Vertex, Edges, colors}, setTree] = useState<Tree>({Vertex: [], Edges: [], colors: []});
    const fade = Vertex.length > 0 ? "animate-fade-in-load-delay opacity-0 " : "";

    useEffect(() => {
        const tree = genTree(Width, Height, Nodes, invert ? invert : false);
        // The random tree must be generated after hydration so the server and client markup match.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTree(tree);
    }, [Width, Height, Nodes, invert]);

    return (
        <svg className={"absolute " + fade + className} viewBox={`0 0 ${Width} ${Height}`} preserveAspectRatio="none">
            {/*{Vertex.map((v, i) => (
                <circle key={i} cx={v[0]} cy={v[1]} r="0.2" fill={colors[i]} className="opacity-20" />
            ))}
            {Edges.map((e, i) => (
                <line key={i} x1={Vertex[e[0]][0]} y1={Vertex[e[0]][1]} x2={Vertex[e[1]][0]} y2={Vertex[e[1]][1]} className="opacity-20" strokeWidth="0.1" strokeLinecap="round"
                    stroke={colors[e[0]] != "white" && colors[e[1]] != "white" ? colors[e[0]] : "white"}
                 />
            ))}*/}
        </svg>
    );
}

export default TreeSVG;
