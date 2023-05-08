/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.
    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

//함수 선언문
function add(n1, n2){
    return n1 + n2;
}

//const plus = add(5, 9);  //add의 호출결과를 저장
const plus = add;   //add함수를 저장

console.log(`plus에 저장된 add : ${plus}, 그냥 add : ${add}`);

const sub = function(n1,n2){
    return n1 - n2;
}
console.log(sub(20,10));

//자바스크립트의 배열은 자료형이 달라도 저장 가능
const fArr = [10, 'hello', true,{}, [], add,function(){console.log('rr')}];
fArr[6]();

const dog = {
    f : function(){
        console.log("dsd");
    }
}
dog.f();

