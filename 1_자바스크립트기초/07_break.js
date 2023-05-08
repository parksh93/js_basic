outer : for (let i = 0; i < 4; i++) {
    inner:for (let j = 0; j < 3; j++) {
        if(i===j){
            console.log(`[${i}, ${j}]`)
            break outer;
        }
    }
}