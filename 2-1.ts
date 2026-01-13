//TODO: 다음 인터페이스들을 정의하세요

// 1. User: id(number), name(string), email(string), age(optional number)
// 2. Post: id(number), title(string), content(string), author(User),
//    createdAt(Date), tags(string array)
// 3. Comment: id(number), content(string), author(User), post(Post)
// 4. API Response: success(boolean), data(generic), error(optional string)
interface TUser  {
  name : string,
  id ?: number,
  email : string,
  age ?: number
}
interface Post {
  id : number,
  title : string,
  content : string,
  author : TUser,
  createdAt : Date,
  tags : String[]

}

interface ApiResponse<TUser> {
  success : boolean,
  data : TUser,
  error ?: string

}
// 테스트
const tuser: TUser = {
  id: 1,
  name: "Kim",
  email: "kim@test.com"
};

const post: Post = {
  id: 1,
  title: "Hello",
  content: "World",
  author: tuser,
  createdAt: new Date(),
  tags: ["typescript", "tutorial"]
};

const response: ApiResponse<TUser[]> = {
  success: true,
  data: [tuser]
};