// void -> 공허 -> 아무것도 없다.
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return 'hello'
}

function func2(): void {
  console.log('hello')
}

// undefined만 넣을 수 있음.
let a: void
// a = 1
// a = {}
a = undefined

// never: 존재하지 않는
// 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error()
}

// 다 안 됨
// let a: never
// b = 1
// b = {}
// b = undefined
// b = null
