// (see my prototype code for another example)
// (see another example in https://github.com/hchiam/learning-js/blob/master/inheritance.js)
// Terminal: node class.js

// Preferred way to make a class in JS: https://stackoverflow.com/questions/6169938/javascript-classes-prototype-vs-internal-function-declaration-vs-etc
// (Also, arrow functions may not always be what you want for the "this" keyword.)
// Also, using prototypes is also preferred (faster/shared/less-memory) to inner functions: https://code.tutsplus.com/tutorials/stop-nesting-functions-but-not-all-of-them--net-22315
function ListNode(val) {
  this.val = val;
  this.next = null;
  this.ownProp = "different from prototype prop, is copied";
  // this.doSomethingElse = function() {
  //   console.log('this function would get re-declared every object');
  // };
}
ListNode.prototype.doSomething = function () {
  // this way does NOT get re-declared every object
  console.log("hi");
  console.log(this.prototypeVariable);
};
ListNode.staticFunction = function () {
  console.log("'static' function");
};
ListNode.prototype.prototypeVariable = "prototype var val";
const a = new ListNode(1);
a.doSomething();
console.log(a.prototypeVariable);
a.prototypeVariable = "some new value";
console.log(`${a.prototypeVariable} - changed since added own prop`);
console.log(
  `${ListNode.prototype.prototypeVariable} - same since you only added an own prop`
);
ListNode.prototype.prototypeVariable = "edited prototype var val";
console.log(`${ListNode.prototype.prototypeVariable}`);

// Here's another way to make a class in JS:
// Remember to add 'this.' before function names too!!!
function myClass(myVar) {
  // function className(initVars)
  this.myVar = myVar; // this.varName
  this.get = function () {
    // this.funcName = function(params)
    return this.myVar; // return this.varName
  };
}

test = new myClass(2); // new className(initVars)
console.log("test = new myClass(2);");
console.log("test.get() = " + test.get());

console.log("\nAnother example:");

function myClassDef(initVar) {
  this.var = initVar;
  this.myFun = function (param) {
    this.var = param + " " + this.var;
    return this.var;
  };
}

myInstance = new myClassDef("Alex");
console.log(myInstance.myFun("hi"));

// yet another (new) way to make "classes":
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// note: hoisting does NOT work on classes
class Rectangle {
  // note: can be misleading since it's just actually just a prototype
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let r = new Rectangle(1, 2);

console.log(r.height);
