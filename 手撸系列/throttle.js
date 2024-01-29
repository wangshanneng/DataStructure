/**
 * 节流（Throttle）
 * 实现思路：在规定的时间间隔内多次触发事件，只有第一次触发会生效，而在该时间间隔结束之前的其他触发将被忽略
 * 应用场景：滚动事件、窗口resize事件、mouseover事件等
 */

function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    let context = this;
    let nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn.apply(context, args);
      lastTime = nowTime;
    }
  };
}

function myFunc(...args) {
  console.log(args);
}

const test = throttle(myFunc, 500);

// 多次调用节流函数
test("1", "1");
test("2", "2");

setTimeout(() => {
  test("3", "3");
}, 500);
