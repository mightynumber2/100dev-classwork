///////////////////////////////////////
// FILTER RANGE "IN PLACE"

/* const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) { 
      arr.splice(i, 1);
      i--;
    }
  }
}; */
const filterRangeInPlace = (arr, a, b) => {
  arr.forEach((num, index) => {
    if (num < a || num > b) {
    arr.splice(index, 1);
    }
  })
};
filterRangeInPlace(arr, 1, 4);
alert(arr);


