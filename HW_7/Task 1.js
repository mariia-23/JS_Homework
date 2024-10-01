// Task 1
function mergedArray(...arrays) {
    let result = [];
    for (const array of arrays) {
        for (const element of array) {
            result.push(element);
        }
    }
    return result;
}

const r = mergedArray([1, 2], [3, 4], [5, 6]);

console.log(r);


function mergedArray(...arrays) {
    return [].concat(...arrays);
}
console.log(mergedArray([1, 2], [3, 4], [5, 6]));

// Task 2
// 1 solution
const sentence = "I am super engineer";
function sentenceProcess(sentence) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const symbol = sentence[i];
        if (i === 0) {
            result = result.concat(symbol.toLowerCase());
        } else if (sentence[i - 1] === " ") {
            result = result.concat(symbol.toUpperCase());
        } else if (symbol === " ") {
            result = result.concat("_");
        } else {
            result = result.concat(symbol);
        }
    }

    return result;
}
console.log(sentenceProcess(sentence));

// 2 solution
function upperCaseFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function lowerCaseFirst(str) {
    if (!str) return str;

    return str[0].toLowerCase() + str.slice(1);
}


function process(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if(i === 0){
          words[i] = lowerCaseFirst(words[i]);
        } else {
            words[i] = upperCaseFirst(words[i]);
        }
    }
    return words.join("_");
}

console.log(process(sentence));

// Task 3
function fibonacci(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result.push(0);
            continue;
        }
        if (i === 1) {
            result.push(1);
            continue;
        }
        result.push(result[i - 2] + result[i - 1])
    }
    return result[result.length - 1];
}

console.log(fibonacci(8))

