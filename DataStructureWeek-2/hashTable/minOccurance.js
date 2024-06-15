function minimumOccurance(array){

    let map = new Map();

    for (const num of array) {
        if(!map.has(num)){
            map.set(num, 1);
        }else{
            map.set(num, map.get(num)+1);
        }
    }

    let minOcc = Infinity;
    let numberAtMinOcc = 0;

    for (const [num, count] of map) {
        if(minOcc > count){
            minOcc = count;
            numberAtMinOcc = num;
        }
    }

    return numberAtMinOcc;
}

console.log(minimumOccurance([1,2,3,5,3,5,2,5,3,1,5,2,7,5,9,5,9]));

