// ES5
var sentence = '<ul>\n\t<li>\n\t\t<a>add</a>\n\t</li>\n</ul>';

//ES6
let sentence1 = `
<ul>
    <li>
        <a>aaaa</a>
    </li>
</ul>
`;
console.log(sentence);
console.log(sentence1);

var month = 5;
var day = 5;
var anniversary = '어린이날';

// ES5
var message = month +'월 ' 
            + day + '일은 ' + anniversary + '입니다.';
console.log(message);

//ES6
var message2 = `${month}월 ${day}일은 ${anniversary}입니다.`;
console.log(message2);

//논리자료형
var flag = false;
console.error(typeof flag);

//객체 자료형
var lulu = {
    name: '룰루',
    age : 4,
    kind:'스코티 폴드'
};

console.log(lulu);