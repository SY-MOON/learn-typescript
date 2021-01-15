interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Man'} // 객체를 명시적으로 리턴해도, 공통된 것만 ...

}
var tony = introduce();
console.log(tony.skill);

if((tony as Developer).skill) {
  console.log((tony as Developer).skill)
} else if((tony as Person).age) {
  console.log((tony as Person).age);
}

// 타입가드 정의
function isDeveloper(target: Developer| Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
  tony.skill
} else {
  tony.age
}