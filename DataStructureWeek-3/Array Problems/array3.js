function patternPrinting() {
    let a = 100;
    let result = [];
    for(let i = 0; i< 10; i++){
        result.push(a-i);
        a = a - i;
    }
    return result;
}

function fibanocciSeries() {
    let result = [0, 1];
    for (let i = 2; i< 10; i++){
        result.push((result[i-1])+(result[i-2]));
    }
    return result;
}

function triangularNumbers(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        result.push((i * (i + 1)) / 2);
    }
    return result;
}

console.log(triangularNumbers(10)); //Output = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
console.log("pattern - 1",patternPrinting()); //Output = [100, 99, 97, 94, 90, 85, 79, 72, 64, 55]
console.log("fibanocci", fibanocciSeries()); //Output = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]