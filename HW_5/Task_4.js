let text = "Hello world!"
const vowels = "aeiouy";
const consonants = "bcdfghjklmnpqrstvwxz";
let vowelsCount = 0;
let consonantsCount = 0;
for (let i = 0; i < text.length; i++) {
    let symbol = text[i].toLowerCase();    
    if (vowels.indexOf(symbol) > -1) {
        vowelsCount++;
    } else if (consonants.indexOf(symbol) > -1) {
        consonantsCount++;
    }
}
console.log(`text contains ${vowelsCount} vowels and ${consonantsCount} consonants`);
