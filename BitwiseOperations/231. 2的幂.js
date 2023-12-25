// 思路：使用循环除以 2 或者位运算，检查整数是否是 2 的幂次方，通过判断余数或者位运算的结果。

// 解法一:
let isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

// 解法二:
let isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }

  return n === 1;
};
