function regexVar(str) {
    str = String(str.toLowerCase());
    vowels = ['a','e','i','u','o'];
    for (let i = 0; i < str.length; i++) {
        if (str.startsWith(vowels[i]) && str.endsWith(vowels[i])) {
           return true;
        }
    }
    return false;
}

console.log(regexVar("OHHHHA"));
console.log(regexVar("oGToo"));
