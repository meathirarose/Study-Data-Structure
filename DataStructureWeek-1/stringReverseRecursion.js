function recursiveReverseString(str) {
    if(str.length === 0){
        return "";
    }

    //return recursiveReverseString(str.slice(1)) + str[0];
    return recursiveReverseString(str.substring(1)) + str.charAt(0);

}

console.log(recursiveReverseString("athira"));
