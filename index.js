//BUBBLE SORT ALGORITHM

let arr = [10, 5, 3, 8, 2, 3.5, 6, 3,  4, 7, 9, 1]

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