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