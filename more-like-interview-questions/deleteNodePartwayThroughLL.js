/* eslint-disable require-jsdoc */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * Assumes never given the last node in the linked list.
 */
const deleteNode = (node) => {
  if (!node.next) return;
  node.val = node.next.val;
  node.next = node.next.next;
};

function solutionWrapper(node) {
  return deleteNode(node);
}

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
