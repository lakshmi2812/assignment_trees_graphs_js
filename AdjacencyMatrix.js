const edgeList = require("./edgeList");

class AdjacencyMatrix {
  constructor(list) {
    this.maxId = 0;
    list.forEach(edge => {
      if (edge[0].id > this.maxId) {
        this.maxId = edge[0].id;
      }
    });
    //console.log(this.maxId);
    this.matrix = new Array(this.maxId + 2).fill([]);
    this.matrix = this.matrix.map(elem => new Array(this.maxId + 2).fill(0));
    //console.log(this.matrix);
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
  }
}

const ourMatrix = new AdjacencyMatrix(edgeList);
console.log(ourMatrix.matrix);
