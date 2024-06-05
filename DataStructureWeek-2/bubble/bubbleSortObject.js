function bubbleSortStable(arr, key){
    let swapped;
    do{
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i][key] > arr[i+1][key]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
    }while(swapped)
    return arr;
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 25 }
];
console.log(bubbleSortStable(people, 'age'));