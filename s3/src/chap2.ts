// unknown 타입

function unknownExam() {
  let a: unknown = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined

  let unknownVar: unknown

  // 다운캐스팅은 안 됨
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}

// never 타입
function neverExam() {
  // 공집합
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc()
  let str: string = neverFunc()
  let bool: boolean = neverFunc()

  // 다운캐스팅은 안 됨
  // never는 어떤 값도 저장되어서는 안 되는 값들을 넣으면 좋다.
  // let never1: never = 10
}

// void 타입
function voidExam() {
  function voidFunc() {
    console.log('hi')
  }
}
