const splitWords = (str) => {
    const result = [];
    let current = '';

    for(let i=0; i<str.length; i++){
        if(str[i] === ','){
            if(current.trim()!==''){
                result.push(current.trim());
            }
            current = '';
        }else{
            current+=str[i];
        }
    }

    if(current.trim()!==''){
        result.push(current.trim());
    }
    return result;
}

console.log(splitWords("apple, something,javascript,,2"));
console.log(splitWords("   apple  ,   something   ,javascript  , ,2  "));
console.log(splitWords(",,,apple, something,,")); 
console.log(splitWords("no,commas,just,words")); 
console.log(splitWords("")); 
console.log(splitWords(", , ,"));
console.log(splitWords("oneWord")); 