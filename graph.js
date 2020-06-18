class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    const keys = this.AdjList.keys();
    for (var i of keys) {
      console.log("\nAdjacency list of vertex " + i);
      const edges_list = this.AdjList.get(i);
      for (var j of edges_list) {
        console.log(" -> " + j);
      }
    }
  }
}

module.exports = Graph;

//need the implementation of the Dijkstra algorithm to find shortest path
