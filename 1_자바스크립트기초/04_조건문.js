//Math.floor(자료)는 내림처리
var age = Math.floor((Math.random() * 100)+1);
console.log(`당신의 나이는 ${age}세 입니다.`);

if (age > 19) {
    console.log("성인입니다.");
}else if(age >= 17){
    console.log("고딩입니다.");
}