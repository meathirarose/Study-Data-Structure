function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length-1; i++) {
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

const array = [-2, 4, -1, 9, 6, -7];
bubbleSort(array)
console.log(array);