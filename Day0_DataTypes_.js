function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    secondInteger = Number(secondInteger)
    secondDecimal = Number(secondDecimal)
    secondString = String(secondString)
    
    console.log(firstInteger + secondInteger)
    console.log(secondDecimal + firstDecimal)
    console.log(firstString + secondString)
}

performOperation(9, 6.7, "is the best place to learn and practice coding!")
