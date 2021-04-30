import data from '../api/data.json';

const compareDate = (date1, date2) => {
  if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] === date2[2])
    return 0;

  for (let i = 0; i < date1.length; i++) {
    if (date1[i] > date2[i]) return 1;
    else if (date1[i] < date2[i]) return -1;
  }
};

class BSTree {
  static createTree(data) {
    const root = null;
    data.forEach((d) => {
      BSTree.addNode(root, new Node(d));
    });
    return root;
  }

  static addNode(root, node) {
    if (root === null) {
      root = node;
      return;
    }
    let currentNode,
      preNode = root;
    while (currentNode !== null) {
      preNode = currentNode;
      if (compareDate(node.date, currentNode.date) === 1)
        currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    if (compareDate(node.date, preNode.date) === 1) preNode.right = node;
    else preNode.left = node;
  }

  static searchNode(root, date) {
    if (root === null) return null;
    let currentNode = root;
    while (currentNode !== null) {
      let result = compareDate(date, currentNode.date);
      if (result === 0) return;
      else if (result === 1) currentNode = currentNode.right;
      else if (result === -1) currentNode = currentNode.left;
    }
    return null;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.right = null; // greater than
    this.left = null; // equal or less than
  }
}

const root = BSTree.createTree(data);
