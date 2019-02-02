const loopIterate = (arr) => {
  for( let i = 0 ; i < arr.length; i++){
    console.log({i});
    console.log(arr[i]);
  }
};

const loopRecurse = (arr, i=0) => {
  // base case index is arr.length - 1
  if( i > arr.length -1){
    return;
  }
  else{
  // recursive case index is less than 
    console.log({i});
    console.log(arr[i]);
    loopRecurse(arr, ++i);
  }
};

module.exports = {
  loopIterate,
  loopRecurse
};