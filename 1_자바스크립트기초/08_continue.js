var total = 0;

for (let i = 1; i <= 100; i++){
    if (i % 3 !== 0) {
        continue;
    }
    total += i;
}

console.log(total);