function logMessage(value: string | number) { //유니언타입 : 특정 파라미터나 변수에 한가지 이상 타입을 쓸때
  console.log(value);
  if(typeof value === 'number') { //타입 추론이 가능
    value.toLocaleString();
  }
  if(typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number') // 예외를 처리할 수 있음
}

logMessage('hello');
logMessage(10);

var david: string | number | boolean;

interface Developers {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developers | Person) {
  someone.name; // 공통된 속성만 접근 가능
}

askSomeone({name: 'Developer', skill: '웹 개발'})
askSomeone({name: 'Person ', age: 100 })

var Dave: string & number & boolean; // 인터섹선

function askSomeone2(someone: Developers & Person) { 
  someone.name; // 모든 속성을 포함
  someone.skill;
  someone.age;
}

askSomeone2({name: 'Developer', skill: '웹 개발'}) // age가 필요하다고 에러 발생
askSomeone2({name: 'Person ', age: 100 }) // 이건 skill