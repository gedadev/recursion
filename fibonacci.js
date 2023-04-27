function fibs(n) {
    let arr = [0];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            arr.push(1);
        } else {
            arr.push(arr[i] + arr[i - 1]);
        }
    }
    return arr;
}

function fibsRec(n) {
    if (n < 1) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        const arr = fibsRec(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

console.log(fibs(8));
console.log(fibsRec(8));