function countVowels(array) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    array.forEach(str => {
        str = str.toLowerCase();
        for(let char of str){
            if(vowels.includes(char)){
                count++;
            }
        }
    });
    return count;
}

const array = ["athira", "MoyanthIrsh", "Moideen", "Dilu", "Arjun"];
console.log("Vowels count = ", countVowels(array));