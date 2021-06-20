// 생성자함수
function Person(name, age) {
  this.name = name;
  this.age = age
}

class Person {
  // Class logic
  // 인스턴스를 만들어 주는 것이 역할
  constructor(name, age) {
    console.log('생성됨');
    this.name = name;
    this.age = age;
  }
}

const seho = new Person('세호', 30); // constructor가 실행되며 생성됨 출력
console.log(seho);