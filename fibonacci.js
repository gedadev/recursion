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

console.log(fibs(10))