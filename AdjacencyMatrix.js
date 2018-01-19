const edgeList = require("./edgeList");

class AdjacencyMatrix {
  constructor(list) {
    this.maxId = 0;
    list.forEach(edge => {
      if (edge[0].id > this.maxId) {
        this.maxId = edge[0].id;
      }
    });
    this.matrix = new Array(this.maxId + 2).fill([]);
    this.matrix = this.matrix.map(elem => new Array(this.maxId + 2).fill("X"));
    this.matrix[0][0] = "";
    this.fillMatrix(list);
  }

  fillMatrix(list) {
    for (let i = 0; i < this.maxId + 2; i++) {
      list.forEach(edge => {
        if (edge[0].id === i) {
          this.matrix[0][i + 1] = edge[0].name;
          this.matrix[i + 1][0] = edge[0].name;
        } else if (edge[1].id === i) {
          this.matrix[0][i + 1] = edge[1].name;
          this.matrix[i + 1][0] = edge[1].name;
        }
      });
    }

    list.forEach(edge => {
      this.matrix[edge[1].id + 1][edge[0].id + 1] = edge[2].toString();
      this.matrix[edge[0].id + 1][edge[1].id + 1] = edge[2].toString();
    });
  }

  printMatrix() {
    console.log("=========================================================");
    console.log("==========Adjacency Matrix of Names and Weights==========");
    console.log("=========================================================");
    let arrText = "";
    for (let i = 0; i < this.matrix[0].length; i++) {
      while (this.matrix[i][0].length < 8) {
        this.matrix[i][0] += " ";
      }
      for (let j = 0; j < this.matrix[0].length; j++) {
        while (this.matrix[i][j].length < this.matrix[0][j].length) {
          this.matrix[i][j] += " ";
        }
        arrText += this.matrix[i][j] + " | ";
      }
      console.log(arrText);
      arrText = "";
    }
  }

  edgeWeight(id1, id2, list) {}
}

const ourMatrix = new AdjacencyMatrix(edgeList);
ourMatrix.printMatrix();
