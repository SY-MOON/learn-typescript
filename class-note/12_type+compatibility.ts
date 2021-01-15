interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }
class Person {
  neme: string;
}

var developer: Developer;
var person: Person;
//developer = person; // 타입호환이 안됨. person이 가진 속성이 더 적음
person = developer;


//함수
var add = function(a: number) {
  console.log(a)
}
var sum = function(a: number, b: number) {
  return a + b;
}
add = sum; // add는 하나의 인자만 받을 수 있으므로 에러
//sum = add; 

interface Empty<T> {
  //
}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2; //호환되지 않음
notEmpty2 = notEmpty1; //호환되지 않음