// enum타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 0
  USER = 10, // 10
  GUEST, // 11
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '보미',
  role: Role.ADMIN, // 관리자
  language: Language.korean,
}
const user2 = {
  name: '보파',
  role: Role.USER, // 일반 유저
}
const user3 = {
  name: '보솔',
  role: Role.GUEST, // 게스트
}
