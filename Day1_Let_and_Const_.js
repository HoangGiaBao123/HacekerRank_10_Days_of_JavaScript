function constOrLet(r) {
    const PI = Math.PI;
    let n = r
    
    // Print the area of the circle:
    let area = PI * (n ** 2)
    console.log(area)
    
    // Print the perimeter of the circle:
    let perimeter = PI * 2 * n;
    console.log(perimeter);

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

constOrLet(2.6)
constOrLet(6.7)
