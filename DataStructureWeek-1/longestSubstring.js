function longestSubstring(str){
    let result = '';
    let subString = str[0];

    for(let i = 1; i<str.length; i++){
        if(str[i] === subString[subString.length - 1]){
            subString+=str[i];
            if(subString.length > result.length){
                result = subString;
            }
        }else{
            subString = str[i];
        }
    }
    return result;
}

const str = 'aabbcccdddd';
console.log(longestSubstring(str));