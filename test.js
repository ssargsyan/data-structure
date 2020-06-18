function useStack() {
  let Stack = require("./stack.js");
  let stack = new Stack();

  stack.print();
  console.log("peek", stack.peek());
  console.log("Is stack empty " + stack.isEmpty(), poped);
  let length = stack.length();
  console.log("Length = " + length);
  stack.push("Test1");
  console.log(stack.peek());
  stack.push("Test2");
  stack.push("Test3");
  stack.print();
  var poped = stack.pop();
  console.log("Popped item is: " + poped);
  stack.print();
}

function generatePrintBinaryWithQueue(n) {
  let Queue = require("./queue.js");
  let queue = new Queue();

  queue.enqueue("1");

  while (n-- > 0) {
    var s1 = queue.front();
    queue.dequeue();
    console.log(s1);

    let s2 = s1;
    queue.enqueue(s1 + "0");
    queue.enqueue(s2 + "1");
  }
}

function useGraph() {
  let Graph = require("./graph.js");
  const graph = new Graph(6);
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  graph.addEdge("A", "B");
  graph.addEdge("A", "D");
  graph.addEdge("A", "E");
  graph.addEdge("B", "C");
  graph.addEdge("C", "E");
  graph.addEdge("C", "F");
  graph.addEdge("D", "E");
  graph.addEdge("E", "F");
  graph.printGraph();
}
console.log("---Testing stack---");
useStack();
console.log("---Generating binary ---");
generatePrintBinaryWithQueue(13);
console.log("---Testing Graph---");
useGraph();
