let arr1 = [1, 5, 9, 2, 1, 8];

// mapObj={1:0,5:1,};

// i=2;
// value=9; target=10;
// complement=target-value;//1
// [mapObj[complement],i]

function twoSum1(arr, target) {
  let mapObj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let complement1 = target - arr[i];
    if (mapObj[complement1] !== undefined) {
      newArr.push([mapObj[complement1], i]);
    } else {
      mapObj[arr[i]] = i;
    }
  }
  return newArr;
}
console.log(twoSum1(arr1, 10));
