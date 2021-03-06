interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}

const capt = {
  name: '캡틴',
  age: 100
}

getUser(capt); 

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction
sum = function(a: number, b: number): number {
  return a + b
}

// 인덱싱
interface StringArray {
  [index: number]: string
}

var arr2: StringArray = ['a', 'b', 'c']
//arr2[0] = 10 //에러발생

// 딕셔너리 패턴 - 객체에 키로 접근할 때
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj2: StringRegexDictionary = {
  cssFile: /\.css$/,
}

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  name: '캡틴',
  age: 20,
  language: 'ts'
}