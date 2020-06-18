var Stack = require("./stack.js");

function testStack() {
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

testStack();
