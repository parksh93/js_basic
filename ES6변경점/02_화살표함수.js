// function multi(n1, n2){
//     return n1 * n2;
// }

//화살표 함수
const multi = (n1,n2) => n1 * n2;
console.log(multi(1,2));

//함수내용의 변경을 막기 위해 함수는 const로 하는것이 일바적이다.
const message = () => console.log('안녕하세요');

message();

const kim = {
    name: '김자스',
    age : 24,
    greeting : message,
    study : () => console.log("빡공갑니다."),
}
kim.study();
kim.greeting();

const pow = num => num**2;
console.log(pow(2));