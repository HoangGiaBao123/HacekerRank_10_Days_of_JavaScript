function sides(literals, ...expressions) {
    const perimeter = expressions[1];
    const area = expressions[0];
    let s1 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
    let s2 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
    const values = [s1, s2];
    return values.sort();
}
