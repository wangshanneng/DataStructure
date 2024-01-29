/**
 * 防抖（Debounce）
 * 实现思路：使用定时器，每次事件触发时先清除之前的定时器，然后重新设置一个新的定时器，延迟一段时间执行函数。如果在这段时间内再次触发事件，就会清除旧的定时器，重新设置新的，如此循环。
 * 应用场景：搜索框输入、滚动监听等
 */
function debounce(func, wait = 300) {
  let timeout = null;

  return function (...args) {
    let context = this;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

function myFunc(...args) {
  console.log(args);
}

const test = debounce(myFunc, 500);

// 多次调用防抖函数
test("1", "1");
test("2", "2");
test("3", "3");
