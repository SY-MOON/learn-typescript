class Person {
  // 타입을 미리 정의해줘야함
  private name: string;
  public age: number;
  readonly log: string; // 읽기전용 

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}