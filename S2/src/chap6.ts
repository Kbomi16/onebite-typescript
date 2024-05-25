// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10
anyVar = 'hello'

// anyVar = true
// anyVar = {}
// anyVar = () => {}

// any는 오류가 있어도 통과하기 때문에 타입스크립트 쓰는 이유가 없다.
// anyVar.toUpperCase()
// anyVar.toFixed()

let num: number = 10
num = anyVar

// unknown
let unknownVar: unknown
unknownVar = ''
unknownVar = 1
unknownVar = () => {}

// type 정제: type 좁히기
if (typeof unknownVar === 'number') {
  num = unknownVar
}
