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
