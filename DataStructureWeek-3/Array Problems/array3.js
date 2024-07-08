function patternPrinting() {
    let a = 100;
    let result = [];
    for(let i = 0; i< 10; i++){
        result.push(a-i);
        a = a - i;
    }
    return result;
}
console.log(patternPrinting());