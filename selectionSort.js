const selectionSortArr = [-1,56,167,9,11,44,36,753,951,741,7,5,3,9,1,4,6,8,2,123,369,0,987,12,23,65,54,78,98,96,31,79,56,11,-5,-9,-6,-25,-14,-36,-85,-76,-94];

let selectionSortCount = 0;
const selectionSort = (arr) => {
  for(let i = 0; i< arr.length;i++){
    let indexMin = i
    for(let j = i + 1; j<arr.length;j++){
      if(arr[j] < arr[indexMin]){
        indexMin = j
      }
      selectionSortCount++
    }
    const temp = arr[i]
    arr[i] = arr[indexMin]
    arr[indexMin] = temp
  }

  return arr
}

console.log(selectionSort(selectionSortArr))
console.log('selectionSortCount',selectionSortCount)
console.log('==============================================================================================================')