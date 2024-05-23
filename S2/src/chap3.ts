let user: {
  id?: number
  name: string
} = {
  id: 1,
  name: '보미',
}

user = {
  name: '나나',
}

let config: {
  // 읽기 전용 프로퍼티
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY',
}
