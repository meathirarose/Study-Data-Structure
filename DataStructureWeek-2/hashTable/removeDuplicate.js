function removeDuplicates(str) {
    let temp = new Set();

    for (let i = 0; i < str.length; i++) {
        if(!temp.has(str[i])){
            temp.add(str[i]);
        }        
    }

    return temp;
}

const str = "hello world";
console.log(removeDuplicates(str));