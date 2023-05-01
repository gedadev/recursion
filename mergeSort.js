function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const left = mergeSort(arr.slice(0, arr.length/2));
        const right = mergeSort(arr.slice(arr.length/2, arr.length));
    }
}