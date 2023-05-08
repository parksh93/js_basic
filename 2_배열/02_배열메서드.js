var foodList = ['라멘','해장국','돈카츠','보쌈정식'];

var count = 0;

var target = '라멘';

var index = foodList.indexOf(target);

console.log(index);

foodList.push("순대국밥","우육면");

//1 ~ 4-1 까지의 값 가져옴
var slicedFoods = foodList.slice(1,4);

console.log(slicedFoods);
console.log(foodList);

//1 ~ 끝까지
var slicedFoods = foodList.slice(1);

console.log(slicedFoods);
console.log(foodList);

//원본배열 그대로 깊은 복사
var slicedFoods = foodList.slice();
slicedFoods[0] = '라멘2';

console.log(slicedFoods);
console.log(foodList);

var nums = [10,20,30,40,50];
var copyNums = nums.slice();

//인덱스를 뒤집음
copyNums.reverse();
console.log(`원본 : ${nums}  복사본 : ${copyNums}`);

var arr1 = [10,20,30];
var arr2 = [100,200,300];

var concatedArr = arr1.concat(arr2);
//배열 두개를 연결
console.log(concatedArr);

//배열에 해당 값이 있는지 확인
var result = foodList.includes("피자");
console.log(result);

console.log(foodList)
//배열의 특정요소를 제거, 삽입
//1번부터 2개를 삭제
foodList.splice(1,2);
console.log(foodList);

//0번부터 2개까지를 보쌈으로 변경
foodList.splice(0, 2,"보쌈");
console.log(foodList);

//삭제되는 데이터 없이 삽입
foodList.splice(1,0,"스파게티");
console.log(foodList);
foodList.splice(2,0,"도삭면","삼겹살");
console.log(foodList);

//특정번호 이후 다 지우기
foodList.splice(2);
console.log(foodList);

//구분자로 배열을 나눠서 문자로 반환
var str = foodList.join('/');
console.log(`${str}의 타입  : ${typeof str}`);