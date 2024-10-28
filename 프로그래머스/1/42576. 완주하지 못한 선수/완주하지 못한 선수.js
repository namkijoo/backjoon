function solution(participant, completion) {
    const myMap = new Map();

    for (const p of participant) {
        if (!myMap.has(p)) {
            myMap.set(p, 1);
        } else {
            myMap.set(p, myMap.get(p) + 1);
        }
    }

    for (const c of completion) {
        if (myMap.has(c)) {
            myMap.set(c, myMap.get(c) - 1);
        }
    }

    for (const p of participant) {
        if (myMap.get(p) >= 1) {
            return p; 
        }
    }
}
