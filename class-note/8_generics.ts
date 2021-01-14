// function logText(text) {
//   console.log(text);
//   return text; // 파라미터를 받아서 그대로 반환함
// }

// logText(10);


// function logText<T>(text: T): T {
//   console.log(text);
//   return text;

// }

// logText<string>('하이'); // 파라미터를 넘길 때 타입을 같이 넘길 수 있음.

function logText<T>(text: T): T { 
  console.log(text);
  return text; 
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);