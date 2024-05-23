// 타입 별칭
type User = {
  id: number
  name: string
  nickname: string
  bio: string
  location: string
}

let user: User = {
  id: 1,
  name: '보미',
  nickname: '보리',
  bio: '안녕',
  location: '서울',
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number
  Korea: number // Korea는 꼭 있어야 함
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}
