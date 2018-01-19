const util = require("util");

class BinaryNode {
  constructor(left, right, data) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor(arr) {
    this.rootNode = new BinaryNode(null, null, arr[0]);
    arr = arr.slice(1);
    arr.forEach(num => {
      this.addNode(new BinaryNode(null, null, num), this.rootNode);
    });
  }

  addNode(node, parent = this.rootNode) {
    if (node.data >= parent.data) {
      if (parent.right) {
        this.addNode(node, parent.right);
      } else {
        parent.right = node;
      }
    } else {
      if (parent.left) {
        this.addNode(node, parent.left);
      } else {
        parent.left = node;
      }
    }
  }

  printTree(currentNode = this.rootNode) {
    console.log(`Node: ${currentNode.data}`);
    if (currentNode.left === null && currentNode.right === null) {
      return console.log("---this node has no children");
    }
    if (currentNode.right || currentNode.left) {
      if (currentNode.right) {
        console.log(`---Right: ${currentNode.right.data}`);
      }
      if (currentNode.left) {
        console.log(`---Left: ${currentNode.left.data}`);
      }
      if (currentNode.right) {
        this.printTree(currentNode.right);
      }
      if (currentNode.left) {
        this.printTree(currentNode.left);
      }
    }
  }
}

let binaryTree = new BinarySearchTree([8, 10, 3, 1, 6, 14, 4, 7, 13]);
//console.log(binaryTree);
//console.log(util.inspect(binaryTree, false, null));
binaryTree.printTree();
