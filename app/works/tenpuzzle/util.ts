

const solverSub = (stk: Array<number>, que: Array<number>, target: number, answer: Array<string>): boolean => {
    if (stk.length === 1 && que.length === 0) {
        return stk[0] === target;
    }

    if (stk.length >= 2) {
        const s = stk.slice();
        const q = que.slice();
        const rhs = s.pop()!;
        const lhs = s.pop()!;

        // +
        s.push(lhs + rhs);
        if (solverSub(s, q, target, answer)) {
            answer.push('+');
            return true;
        }
        s.pop();

        // -
        s.push(lhs - rhs);
        if (solverSub(s, q, target, answer)) {
            answer.push('-');
            return true;
        }
        s.pop();

        // *
        s.push(lhs * rhs);
        if (solverSub(s, q, target, answer)) {
            answer.push('*');
            return true;
        }
        s.pop();

        // /
        if (rhs !== 0) {
            s.push(lhs / rhs);
            if (solverSub(s, q, target, answer)) {
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
        if (solverSub(s, q, target, answer)) {
            answer.push('s');
            return true;
        }
    }
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
        else if (c == '*' || c == '/') {
            let rhs = stk.pop()!;
            let lhs = stk.pop()!;
            if (rhs[0] == '*') rhs = rhs.slice(1);
            if (lhs[0] == '*') lhs = lhs.slice(1);
            // stk.push(`${lhs}${c}${rhs}`);
            if (c == '*') {
                stk.push(`${lhs}\\times${rhs}`);
            }
            else {
                stk.push(`\\frac{${lhs}}{${rhs}}`);
            }
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

const SolveTenPuzzle = (arr: Array<number>, target: number): string => {
    arr.sort();

    do {
        const stk: Array<number> = [];
        const que: Array<number> = arr.slice();
        let answer: Array<string> = [];

        if (solverSub(stk, que, target, answer)) {
            answer = answer.reverse();
            return decodeAnswer(answer.join(''), arr);
        }
    } while (next_permutation(arr));
    return '';
}

export { SolveTenPuzzle };