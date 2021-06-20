//함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b
}

sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10
}

// 함수의 타입을 정의하는 방식
function newSum(a: number, b: number): number {
  return a + b;
}

function newAdd(a: number, b:number): number {
  return a + b;
}

newAdd(10, 20, 30, 40); //추가적으로 인자를 넣으면 오류뜸
newAdd(10); //인자가 덜 들어가도 오류뜸

//함수의 옵셔널 파라미터
function log(a:string, b?: string) { //느낌표를 넣으면 옵셔널하게 사용할 수 있음

}