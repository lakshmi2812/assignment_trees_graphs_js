//Sample data
//[8, 10, 3, 1, 6, 6, 14, 4, 7, 13]

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
    arr.forEach(num => {
      this.addNode(new BinaryNode(null, null, num), this.rootNode);
    });
  }

  //add_node
  addNode(node, parent) {
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
}

//Testing

let binaryTree = new BinarySearchTree([8, 10, 3, 1, 6, 6, 14, 4, 7, 13]);
console.log(binaryTree);
