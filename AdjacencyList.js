const edgeList = require("./edgeList");

class Node {
  constructor(id, next = null) {
    this.data = id;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  initialize(firstNode = null) {
    this.head = firstNode;
    this.tail = firstNode;
  }

  addFirstNode(data) {
    this.head = new Node(data, null);
    this.tail = this.head;
  }

  addNode(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      const node = new Node(data, null);
      this.tail.next = node;
      this.tail = node;
    }
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.head;

    // Big-O time = O(n), linear time
    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }
    // console.log(
    //   `Counter = ${counter} Current Node = ${currentNode.data.word} : ${
    //     currentNode.data.definition
    //   }`
    // );
    return currentNode;
  }
}

class AdjacencyList {
  constructor(list) {
    this.maxId = 0;
    list.forEach(edge => {
      if (edge[0].id > this.maxId) {
        this.maxId = edge[0].id;
      }
    });
    this.adjList = new Array(this.maxId + 1).fill(new LinkedList());
    this.fillAdjacencyList(list);
  }

  fillAdjacencyList(list) {
    list.forEach(edge => {
      let currentId = edge[0].id;
      if (this.adjList[edge[0].id].findNode(0).data === edge[0].id) {
        this.adjList[edge[0].id].addNode(edge[1].id);
      } else {
        this.adjList[edge[0].id].addFirstNode(edge[1].id);
      }
      //console.log(this.adjList[edge[0].id]);
    });
  }
}

//Tests

let newAdjList = new AdjacencyList(edgeList);
newAdjList.adjList.forEach(_list => {
  console.log(_list);
});
//console.log(newAdjList);
