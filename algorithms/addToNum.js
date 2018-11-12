module.exports = function addToNum(num){
    // base case
    if(num === null ){
        return null;
    }
    if(num <= 1 ){
        return num;
    }
    // recursive case
    return num + addToNum(num-1);
}