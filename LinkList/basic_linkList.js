// 定义初始节点
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    // 初始化创建头节点
    this.head = null;
  }
  apend(data) {
    let node = new Node(data);
    let p = this.head;
    if (this.head) {
      // 找到最链表最后一个节点，把这个节点的.next 赋值为node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      // 如果没有head节点，链表为空 ，把头节点赋值为node
      this.head = node;
    }
  }
  print() {
    let p = this.head;
    let ret = "";
    if (this.head) {
      while (p.next) {
        console.log("=>",p.data);
        p = p.next;
      }
      console.log("=>",p.data);
    } else {
      console.log("链表为空！");
    }
  }
}

let linklist = new LinkNodeList();

linklist.apend(1);
linklist.apend(2);
// linklist.apend(3);
// linklist.apend(4);
linklist.print();
