function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min])
                min = j;
        }
        if(min !== i){
            [array[i], array[min]] = [array[min], array[i]]
        }
    }
    return array;
}

console.log(selectionSort(['athi', 'athira', 'john','joseph', 'rose', 'irshad', 'dilu']));