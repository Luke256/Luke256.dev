'use client';

const Node2String = (stk: Array<number>, que: Array<number>, target: number): string => {
    return `${stk.join(', ')}|${que.join(', ')}|${target}`;
}

const solverSub = (stk: Array<number>, que: Array<number>, target: number, answer: Array<string>, memory: Set<string>): boolean => {
    if (stk.length === 1 && que.length === 0) {
        return stk[0] === target;
    }
    if (memory.has(Node2String(stk, que, target))) {
        return false; // already visited this state
    }

    if (stk.length >= 2) {
        const s = stk.slice();
        const q = que.slice();
        const rhs = s.pop()!;
        const lhs = s.pop()!;

        // +
        s.push(lhs + rhs);
        if (solverSub(s, q, target, answer, memory)) {
            answer.push('+');
            return true;
        }
        s.pop();

        // -
        s.push(lhs - rhs);
        if (solverSub(s, q, target, answer, memory)) {
            answer.push('-');
            return true;
        }
        s.pop();

        // *
        s.push(lhs * rhs);
        if (solverSub(s, q, target, answer, memory)) {
            answer.push('*');
            return true;
        }
        s.pop();

        // /
        if (rhs !== 0) {
            s.push(lhs / rhs);
            if (solverSub(s, q, target, answer, memory)) {
                answer.push('/');
                return true;
            }
            s.pop();
        }
    }

    if (que.length > 0) {
        const s = stk.slice();
        const q = que.slice();
        const next = q.shift()!;

        // push next to stack
        s.push(next);
        if (solverSub(s, q, target, answer, memory)) {
            answer.push('s');
            return true;
        }
    }
    memory.add(Node2String(stk, que, target));
    return false;
}

const decodeAnswer = (answer: string, values: Array<number>): string => {
    const stk: Array<string> = [];
    let valIndex = 0;

    for (let i = 0; i < answer.length; i++) {
        const c = answer[i];
        if (c === 's') {
            stk.push(values[valIndex++].toString());
        }
        else if (c == '+' || c == '-') {
            let rhs = stk.pop()!;
            let lhs = stk.pop()!;
            if (rhs[0] == '*') rhs = rhs.slice(2, -1);
            if (lhs[0] == '*') lhs = lhs.slice(2, -1);
            stk.push(`*(${lhs}${c}${rhs})`);
        }
        else if (c == '*') {
            let rhs = stk.pop()!;
            let lhs = stk.pop()!;
            if (rhs[0] == '*') rhs = rhs.slice(1);
            if (lhs[0] == '*') lhs = lhs.slice(1);
            stk.push(`${lhs}\\times${rhs}`);
        }
        else if (c == '/') {
            let rhs = stk.pop()!;
            let lhs = stk.pop()!;
            if (rhs[0] == '*') rhs = rhs.slice(2, -1);
            if (lhs[0] == '*') lhs = lhs.slice(2, -1);
            stk.push(`\\frac{${lhs}}{${rhs}}`);
        }
    }

    if (stk[0][0] == '*') stk[0] = stk[0].slice(2, -1);
    return stk[0];
}

function next_permutation(arr: Array<number>): boolean {
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] > arr[i]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    const len = (arr.length - (i + 1)) >> 1;
                    for (let k = 0; k < len; k++) {
                        [arr[i + 1 + k], arr[arr.length - 1 - k]] = [
                            arr[arr.length - 1 - k],
                            arr[i + 1 + k],
                        ];
                    }
                    return true;
                }
            }
        }
    }
    return false;
}

const solveWithAnswer = (arr: Array<number>, target: number): string => {
    const stk: Array<number> = [];
    const que: Array<number> = arr.slice();
    let answer: Array<string> = [];
    const memory: Set<string> = new Set();
    if (solverSub(stk, que, target, answer, memory)) {
        answer = answer.reverse();
        return decodeAnswer(answer.join(''), arr);
    }
    return '';
}

const SolveTenPuzzle = (arr: Array<number>, target: number): string => {    
    
    const result = solveWithAnswer(arr, target);
    if (result) {
        return result;
    }

    arr.sort();
    do {
        const result = solveWithAnswer(arr, target);
        if (result) {
            return result;
        }
    } while (next_permutation(arr));
    return '';
}

export { SolveTenPuzzle };