function testStack() {
  let Stack = require("./stack.js");
  let stack = new Stack();
  console.log("Is stack empty " + stack.isEmpty());
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
console.log("---Testing stack---");
testStack();
console.log("---Generating binary ---");
generatePrintBinaryWithQueue(13);
