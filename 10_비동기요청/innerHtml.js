//innerHTML은 문자를 대입받으면 전부 태그로 바꿔서 적용한다.
//특정태그 내부 요소를 추가하거나 교처하는 방법
//태그변수.innerHTML = '추가할 내용'
let str = "";   //전역 변수로 빈문자 선언

const addTag = () => {
str += "<h1>새로운 내용</h1>";
// str = "<h1>새로운 내용</h1>";    // +=이 아닌 = 으로하면 한번만 들어가진다.

// let $h1 = document.createElement("h1");
// $h1.innerText = "새로운 내용1";
// $h1.style.color = "red";
// document.getElementById('container').appendChild($h1);

document.getElementById('container').innerHTML = str;
}
document.getElementById('oneTimeButton').addEventListener('click', addTag);