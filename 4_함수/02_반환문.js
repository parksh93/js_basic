function add(n1=2, n2=1) {
    return n1 + n2;

    //return밑으로는 실행안됨
    console.log("실행안됨");
}

var r1 = add(5, 7);
console.log(r1);

console.log(add());