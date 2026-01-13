interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

//TODO: 다음 타입들을 정의하세요

// 1. User extends BaseEntity: name, email, role("admin" | "user")
// 2. Product extends BaseEntity: name, price, stock, category
// 3. Order extends BaseEntity: user(User), products(Product[]), total, status

// 4. 타입 유틸리티 사용
// - CreateUserDto: User에서 id, createdAt, updatedAt 제외
// - UpdateUserDto: User의 모든 필드 선택적, id는 필수
// - UserSummary: User에서 id, name만 선택
interface CreateUserDto extends TUser {
    role : string
}
//Pick 이용해서 BaseEntity 인터페이스에서 id 속성만 가져오고 추가 속성 확장
type UpdateUserDto  = Pick<BaseEntity , 'id'> & {

    name:string
}
//Pick 이용해서 특정 속성만 가져옴
type UserSummary = Pick <TUser, 'id' | 'name'>
// 테스트
const newUser: CreateUserDto = {
  name: "Kim",
  email: "kim@test.com",
  role: "user"
};

const updateData: UpdateUserDto = {
  id: 1,
  name: "Lee"
};

const summary: UserSummary = {
  id: 1,
  name: "Kim"
};