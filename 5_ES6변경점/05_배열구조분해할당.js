const userNames = ['김철수','강감찬','박영희'];

const [kim,kang,park] = userNames;

console.log(`kim : ${kim} kang : ${kang} park : ${park}`);

//변수 값 교환하기
let first = 10;
let second = 20;

// let temp = first;
// first = second;
// second = temp

//간단하게 바꿀 수 있다
[first, second] = [second,first];

//앞 2개는 변수에 각각 넣고, 나머지는 배열로 빼기
const numbers = [1, 3, 4,5,];
const [one, three, ...other] = numbers;


//스프레드를 이용한 배열확장
const foods = ['돈까스', '감자탕','내장탕'];

const newFoods = [foods,'초밥','햄버거'];

console.log(foods);
console.log(newFoods);
console.log(newFoods[0]);
//일반 확장을 하려고 하는 경우, 이중배열처리되고
//얕은 복사가 일어나는 문제가 있다.
foods[0] = '크로켓';
console.log(foods);
console.log(newFoods);

console.log('------------------');

//깊은 복사
const advFoods = [...foods,'초밥','햄버거'];
console.log(advFoods);
console.log(advFoods.length);