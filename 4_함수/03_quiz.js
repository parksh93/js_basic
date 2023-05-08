// 약수 구하기
function calcDicisor(n){
    var divisor = [];
    //약수 구할때는 절반까지만 돌리면 된다 
    //ex)20의 약수 : 20 10 5 4 2 1 -> 20, 1을 제외하고 10~2는 20의 절반에서 도출된다
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisor.push(i);
        }
    }
    return divisor.length;
}

var cnt = calcDicisor(20);
console.log(cnt);