let str = 'a1b2c12';
let map = {
    "0": true,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
}
let num = '';
for(let i=0; i<str.length; i++){
    if(map[str[i]]){
        if(map[str[i+1]]){
            num += str[i];
            continue;
        }
        num += str[i]
        for(let j=0; j<parseInt(num); j++){
            console.log(str[i-num.length])
        }
    }
    
    num = ""
}