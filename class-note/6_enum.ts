enum Shoes {
 Nike = '나이키', // 별도의 처리가 없으면 숫자형 enum으로 취급
 Adidas = '아디다스' 
}

let myShoes = Shoes.Nike;
console.log(myShoes);

// example
enum Answer {
  Yes = 'Yes',
  No = 'No'
}

function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('Correct!')
  }
  if(answer === Answer.No) {
    console.log('Fail!');
  }
}

// askQuestion('예스');
// askQuestion('y')
// askQuestion('yes')
askQuestion(Answer.Yes) // enum 에서만 제공하는 값만 넘길 수 있도록 함