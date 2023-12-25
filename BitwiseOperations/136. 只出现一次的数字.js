// 解法一：位运算： 异或 ^
let singleNumber = function(nums) {
  let ret = 0;
  nums.forEach(num => {
      ret ^=num
  })

  return ret
};
