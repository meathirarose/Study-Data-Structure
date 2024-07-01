function arithmeticProgression (n){
    let array = [1];
    let j = 1;
    for(let i = 1; i< n; i++){
        array.push(array[i-1] + j);
        j++;
    }
    return array;
}

console.log(arithmeticProgression(10));

