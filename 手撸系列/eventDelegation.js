/**
 * 事件委托（Event Delegation）
 * 实现思路：将事件处理器绑定到一个父元素上，通过事件冒泡机制，利用事件对象的 target 属性确定触发事件的子元素，并在处理器中针对不同的子元素执行相应的操作。
 * 应用场景：列表项的点击事件、动态生成的元素的事件处理等
 * 作用：减少事件处理器的数量，提高性能；简化代码结构，增加可维护性；处理动态生成的元素，确保它们也能响应相应的事件。
 */

// 实例：循环创建10个li标签，当点击li标签时，打印其对应的索引
function loadNode(len) {
  let html = "";
  for (let index = 0; index < 10; index++) {
    html += "<li>" + index + "</li>";
  }
  let list = document.getElementById("list");
  list.onclick = function (event) {
    event = event || window.event;
    let target = event.target || event.srcElement;
    if (target.nodeName.toLowerCase() === "li") {
      console.log(target.innerText);
    }
  };
  list.innerHTML = html;
}
loadNode();

// 实例：大量图片滚动加载时，使用事件委托处理
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
      fn = selector
      selector = null
  }
  elem.addEventListener(type, event => {
      const target = event.target
      if (selector) {
          // 代理绑定
          if (target.matches(selector)) {
              fn.call(target, event)
          }
      } else {
          // 普通绑定
          fn.call(target, event)
      }
  })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
})