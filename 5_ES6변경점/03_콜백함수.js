//정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n){
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
function showOddNumber(n){
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

//1차 개선(짝수 홀수 여부까지 지정)
function showOddOrEvenNumber(n, delimeter){
    for (let i = 0; i <= n; i++) {
        if (i % 2 === delimeter) {
            console.log(i);
        }
    }
}

function showMutipleNumber(n, code) {
    for (let i = 1; i <= n; i++) {
        if (code(i)) {
            console.log(i);
        }
    }
}

const callback = n => n % 3 === 0;
showMutipleNumber(10, callback);