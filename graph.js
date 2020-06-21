class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  getEdges(v) {
    return this.AdjList.get(v);
  }

  printGraph() {
    const keys = this.AdjList.keys();
    for (var i of keys) {
      console.log("\nAdjacency list of vertex " + i);
      const edges_list = this.getEdges(i);
      for (var j of edges_list) {
        console.log(" -> " + j);
      }
    }
  }

  dfs(start) {
    const Stack = require("./stack.js");
    const s = new Stack(this.AdjList.length);
    let visited = [];
    const keys = this.AdjList.keys();
    for (let i of keys) {
      visited[i] = false;
    }

    s.push(start);

    visited[start] = true;

    while (!s.isEmpty()) {
      let poped = s.pop();
      console.log(poped);
      this.getEdges(poped)
        .filter((n) => !visited[n])
        .forEach((n) => {
          visited[n] = true;
          s.push(n);
        });
    }
  }

  bfs(start) {
    const Queue = require("./queue.js");
    let visited = [];
    const keys = this.AdjList.keys();
    for (let i of keys) {
      visited[i] = false;
    }

    var q = new Queue();
    visited[start] = true;
    q.enqueue(start);

    while (!q.isEmpty()) {
      var getQueueElement = q.dequeue();
      console.log(getQueueElement);
      this.getEdges(getQueueElement)
        .filter((n) => !visited[n])
        .forEach((n) => {
          visited[n] = true;
          q.enqueue(n);
        });
    }
  }
}

module.exports = Graph;
