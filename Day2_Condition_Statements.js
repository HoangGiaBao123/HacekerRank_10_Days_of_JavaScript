function getLetter(s) {
    s = s.split('')
    
    const A = ['a', 'e', 'i', 'o', 'u'];
    const B = ['b', 'c', 'd', 'f', 'g'];
    const C = ['h', 'j', 'k', 'l', 'm'];
    const D = ['n','p','q','r','s','t','v','w','x','y','z']
    const alphabet = [...A,...B,...C,...D]
    
    let str_symbol;
    
    let found = false
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === s[0].toLowerCase()) {
            found = true;
            str_symbol = alphabet[i];
            break;
        }
    }
    
    if(found) {
        if (A.includes(str_symbol)) {
            str_symbol = "A"
        }
        else if (B.includes(str_symbol)) {
            str_symbol = "B";
        }
        else if (C.includes(str_symbol)) {
            str_symbol = "C"
        }
        else {
            str_symbol = "D"
        }
    }
    
    return str_symbol;
}
