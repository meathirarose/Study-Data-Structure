
 const duplicateValues = (nums) => {
    if(nums.length === 0){
        return 0;
    }

    let result = [...new Set(nums)];
    return result;
}

console.log(duplicateValues([6,3,2,2,5,5,9,3,6]));
