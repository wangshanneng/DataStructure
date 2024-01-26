/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// @lc code=end

/**
 * 解题思路：【递归】如果 l1/l2 为空链表 ，则直接返回非空链表。
 *          否则，需要判断 l1 和 l2 哪一个链表的头节点的值更小，
 *          然后递归地决定下一个添加到结果里的节点如果两个链表有一个为空，递归结束。
 * 时间复杂度：O(n+m)，其中 nnn 和 mmm 分别为两个链表的长度。
 * 空间复杂度：O(n+m)，其中 nnn 和 mmm 分别为两个链表的长度。
 */
