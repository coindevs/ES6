var log = console.log;
// es5
var es5 = function(a, b) {
  return a + b;
}

// es6
var es6 = (a, b) => {
  return a + b;
}

console.log(es5(1,2));
console.log(es6(1,2));

var func1 = (a,b)=>a+b // 화살표 앞뒤로 띄우지 않아도 가능
var func2 = a => a + 3 // 인자가 하나면 괄호 생략 가능
var func3 = () => 10 // 인자가 없으면 괄호 필요!
// var func4 = () // 이건 문법 에러!!
// => 10;
var func5 = () => // 이건 에러 안남....!?
10;
var func6 = () => {} // undefind 반환
var func7 = () => ({}) // 빈 객체 반환 
var func8 = (...rest) => {
  rest[1]
  console.log(rest[1]);
}
var func9 = (a, b = 123, c, d) => {
  console.log(a,b,c,d);
}
var obj = {
  name: 'JE',
  age: 28,
  school: 'Handong'
}
var {name} = obj;





let Sports = function() {
  this.count = 20;
};

Sports.prototype = {
  plus: function() {
    this.count += 1;
  },
  get: function() {
    setTimeout(function() {
      console.log("hello!");
    }, 0);
  }
}

let newSports = new Sports();
newSports.get();

console.log("======================");
console.log("======================");
console.log("======================");
console.log("======================");
console.log("======================");
console.log("======================");
console.log("======================");

let Game = function() {
  this.count = 20;
};

Game.prototype = {
  plus: function() {
    this.count += 1;
  },
  get: function() {
    setTimeout(() => {
      console.log(this === window);
      console.log(this.plus());
    }, 0);
  }
}

let game = new Game();
game.get();


function sum() {
  var res = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

function bind_add(a) {
  return function(b) {
    return sum(a, b);
  }
}


var obj = {
  name: 'JE',
  age: 28
};


var func100 = (function() {
  var c = 10, a = 10;

  var obj2 = obj;
  
  return function(b) {
    obj2; 

    
    return a + b;
  }
})()


obj = null;

var func100 = function(b) { return a + b }

  func100 = null;

  var abc = 10;
  

  