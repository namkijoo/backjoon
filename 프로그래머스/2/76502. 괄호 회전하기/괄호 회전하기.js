function solution(s) {
    let answer = s;
    let result = 0;
    
    for (let i = 0; i < answer.length; i++) {
        if (isTrue(answer)) {
            result += 1;
        }
        answer = changeString(answer);
    }
    
    return result;
}

function changeString(answers) {
    let arr = [];
    for (let i = 1; i < answers.length; i++) {
        arr.push(answers[i]);
    }
    arr.push(answers[0]);
    return arr
}

function isTrue(answers) {
    const arr = [];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "(" || answers[i] === "{" || answers[i] === "[") {
            arr.push(answers[i]);
        } else if (answers[i] === ")") {
            if (arr.length === 0 || arr.pop() !== "(") {
                return false;
            }
        } else if (answers[i] === "}") {
            if (arr.length === 0 || arr.pop() !== "{") {
                return false;
            }
        } else if (answers[i] === "]") {
            if (arr.length === 0 || arr.pop() !== "[") {
                return false;
            }
        }
    }
    return arr.length === 0;  
}
