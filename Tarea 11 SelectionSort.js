function selection(num) {
    const n = num.length;
    for (let i = 0; i < n - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < n; j++) {
            if (num[j] < num[indexMin]) {
                indexMin = j;
            }
        }
        [num[i], num[indexMin]] = [num[indexMin], num[i]];
    }
}

const num = [64, 25, 12, 22, 11];
selection(num);
console.log("Array ordenado: " + num);