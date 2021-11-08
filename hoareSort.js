
const hoareSortArr = [-1,56,167,9,11,44,36,753,951,741,7,5,3,9,1,4,6,8,2,123,369,0,987,12,23,65,54,78,98,96,31,79,56,11,-5,-9,-6,-25,-14,-36,-85,-76,-94];

let hoareSortCount = 0
const hoareSort = (arr) => {
  if(arr.length <=1) return arr

  const minNums = []
  const equalNums = []
  const maxNums = []
  const element = arr[Math.floor(arr.length / 2)]

  for(let i = 0 ; i < arr.length ; i++ ){
    if(arr[i] === element) {
      eq.push(arr[i])
    }else if(arr[i] <= element){
      minNums.push(arr[i])
    } else {
      maxNums.push(arr[i])
    }

    hoareSortCount++

  }

  return [...hoareSort(minNums),...equalNums,...hoareSort(maxNums)]
}

console.log(hoareSort(hoareSortArr))
console.log('hoareSortCount',hoareSortCount)
console.log('==============================================================================================================')