// 生成随机数组并导出
randomArray =  (min = 0, max = 100, count = 10) => {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

module.exports = randomArray;





