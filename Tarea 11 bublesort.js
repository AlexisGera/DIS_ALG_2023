    function bubbleSort(ar) {
    const n = ar.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (ar[j] > ar[j + 1]) {
                [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
            }
        }
    }
}

const ar = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(ar);
console.log("Array ordenado: " + ar);