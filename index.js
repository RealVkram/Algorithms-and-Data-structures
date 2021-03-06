//INSERT SORT ALGORITHM

let arr = [10, 5, 3, 8, 2, 3.5, 6, 3,  4, 7, 9, 1, 200]

function insertSort( nums ) {
    let len = nums.length
    for(let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] < nums[j]) {
          let spliced = nums.splice(i, 1)
          nums.splice(j, 0, spliced[0])        
        }
      }
    }
    return nums
  }

  //BUBBLE SORT ALGORITHMS
  
  const bubbleSort = (num) => {
    let swapped;
    do {
      swapped = false;
      //loop the entire array
      for (let i = 0; i < num.length; i++) {
       if(num[i] > num[i + 1]) {
          [num[i], num[i + 1]] = [num[i + 1], num[i]]
          swapped = true
        }
      }
      
    } while (swapped) return num
  }

  //MERGE SORT ALGORITHM
  
const mergeSort = ( nums ) => {
    if (nums.length === 1) return nums;
    
    const length = nums.length
    const middle = Math.floor( length / 2 )
    const left = nums.slice(0, middle)
    const right = nums.slice(middle, length)
    
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
    
    return stitch(sortedLeft, sortedRight)
  }
  
  const stitch = (left, right) => {
    const result = []
    
    while(left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift())
      }
      else {
        result.push(right.shift())
      }
    }
    
    return [...result, ...left, ...right]

  }
  //mergeSort(arr)

  //MEDIAN NUMBER SORT ALGORITHM

  const medianMerge = (arr1, arr2) => {
  
    const mergedArray = [...arr1, ...arr2]
    const sortedArray = mergedArray.sort((a, b) => a- b)
    
    let length = sortedArray.length
    let middle = length / 2
    let medianNumber;
    
    if(length % 2 === 0) {
      medianNumber = ( sortedArray[middle - 1] + sortedArray[middle] ) / 2
      return medianNumber
    }
    
    if(length % 2 !== 0) {
      medianNumber = sortedArray[Math.floor(middle)]
      return medianNumber
    }
  }

//WORD COUNT ALGORITHM
  const wordCount = (word) => {
    let result = {}
    
    for (let items of word) {
      result[items] === undefined ?
        result[items] = 1 : result[items]++
    }
    return result  
  }

  //WORDlENGTH ALGORITHM
  const wordLength = (word) => {
    let result = {}
    
    for (let items of word) {
      result[items] === undefined ?
        result[items] = items.length : null
    }
    return result  
  }

  //QUICK SORT
  const quickSort = (nums) => {
    if ( nums.length < 1) return nums;
    
    let left = []
    let right  = []
    let length = nums.length
    let pivot = nums[length - 1]
    
    for (let i = 0; i < length - 1; i++ ) {
      nums[i] < pivot ? 
        left.push(nums[i]) : right.push(nums[i])
    }
    
    return [...quickSort(left), pivot, ...quickSort(right) ]
  }
  

  //INSERT SORT IN A DECREASING ORDER

  function insertSort(num) {
    for (let j = 1; j < num.length; j++) {
      for (let i = 0; i < j; i++) {
        if (num[j] > num[i]) {
          let spliced = num.splice(j, 1)
          num.splice(i, 0, spliced[0])
        }
      }
      
    }
    return num
   }
  
//REVERSE STRING
   const reverseStr = str => {
    if (!str || str.length < 2 || typeof str !== 'string') return 'I was expecting string'
    
    let backwardStr = []
    let length = str.length - 1
    
    for (let i = length; i >= 0; i--) {
       backwardStr.push(str[i])
    }
   return backwardStr.join('')
  }

  const mergeSorted = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2]
    const sortedArray = mergedArray.sort((item1, item2) => item1 - item2)
    
    return sortedArray
  }


  //ALGORITHM TO DETERMINE LARGEST DIVISIBLE NUMBER
const largeNumber = (x, y) => {
  
  
  while (x % y !== 0)  {
     let r =  x - ( y * Math.floor(x / y) )
      x = y, y = r;
     if (x % y === 0) console.log(y)    
   }
 } 

const divisibleNumber = (m, n) => {  
  
  if (m < n) {
    [m, n] = [n, m]
   largeNumber(m, n)
  } 
  else {
    largeNumber(m, n)
  }
}
divisibleNumber(544, 119)

