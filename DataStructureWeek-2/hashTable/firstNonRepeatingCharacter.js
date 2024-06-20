function firstNonRepeatingCharacterInString(str) {
    let hashTable = new Map();

    for (const char of str) {
        if(!hashTable.has(char))
            hashTable.set(char, 1);
        else
            hashTable.set(char, (hashTable.get(char) + 1));
    }

    for (const char of str) {
        if (hashTable.get(char) === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacterInString("hello hai"));