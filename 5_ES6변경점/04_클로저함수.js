function calculator(n1, n2){

    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5, 6);
console.log(typeof closure);
console.log(closure);
console.log(typeof closure());
console.log(closure());