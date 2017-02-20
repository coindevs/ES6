/*
1. var 키워드
2. let 키워드
3. 스코프
  - function
  - try-catch
  - switch-case
  - hoisting
  - for
4. const 키워드
*/

(function() {
  console.log("111");
})()

!function() {
  console.log("2222");
}()

var func1 = function(a, b, c) {
  console.log(a,b,c);
  
  arguments.forEach((v) => {
   console.log(v);
  })
}

var func2 = (a,b,c) => {
  console.log(a,b,c);
  console.log(arguments);
}

[1,2,3].forEach((v) => {
  console.log(v);
})
