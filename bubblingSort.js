
const bubblingSortArr = [-1,56,167,9,11,44,36,753,951,741,7,5,3,9,1,4,6,8,2,123,369,0,987,12,23,65,54,78,98,96,31,79,56,11,-5,-9,-6,-25,-14,-36,-85,-76,-94];

let bubblingSortCount = 0
const bubblingSort = (arr) => {
  for(let i = 0 ; i < arr.length; i++){
    for(let j = 0 ; j < arr.length; j++){
      if(arr[i] < arr[j]){
        let ii = arr[i]
        arr[i] = arr[j]
        arr[j] = ii
      }
      bubblingSortCount++
    }
  }
  return arr
}

console.log(bubblingSort(bubblingSortArr))
console.log('bubblingSortCount',bubblingSortCount)
console.log('==============================================================================================================')