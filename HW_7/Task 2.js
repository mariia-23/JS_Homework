// Task 1
function isPalindrome(str) {
    return str.split('').reverse().join('') == str;
}
console.log(isPalindrome("казак"));

console.log(isPalindrome("кот"));

// Task 2
const sentence = "I am super engineer ssssssss";
function getWordsWithMaxLength(sentence) {
    const words = sentence.split(" ");
    const result = [];
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    for (const word of words) {
        if (word.length === maxLength) {
            result.push(word);
        }
    }
    return result;
}
console.log(getWordsWithMaxLength(sentence));
