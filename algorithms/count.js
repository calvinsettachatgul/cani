
function count(arr){
    
    if (arr === null){
        return 0;
    }
    var sum = 0;
    arr.forEach(function(ele){
        sum += ele;
    })
    return sum; 
};

module.exports = count;

