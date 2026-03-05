function vowelsAndConsonants(s) {
    let str = String(s);
    let str_letters = str.trim().toLowerCase().split('')
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let inVowels = [];
    let notInVowels = [];
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str_letters[i])) {
            inVowels.push(str_letters[i]);
        }
        else {
            notInVowels.push(str_letters[i]);
        }
    }
    
    const finalStr = [...inVowels, ...notInVowels]
    
    for (let x = 0; x < finalStr.length; x++) {
        console.log(finalStr[x]);
    }
}

const input = "HelloMyFriends";
vowelsAndConsonants(input);
