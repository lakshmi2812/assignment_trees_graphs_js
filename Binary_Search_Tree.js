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

  //add_node
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
    console.log(`Root Node: ${currentNode.data}`);
    if (currentNode.left === null && currentNode.right === null) {
      return;
    }
    if (currentNode.right) {
      console.log(`Right: ${currentNode.right.data}`);
      this.printTree(currentNode.right);
    }
    if (currentNode.left) {
      console.log(`Left: ${currentNode.left.data}`);
      this.printTree(currentNode.left);
    }
  }
}

//Testing

let binaryTree = new BinarySearchTree([8, 10, 3, 1, 6, 6, 14, 4, 7, 13]);
console.log(binaryTree);
binaryTree.printTree();
