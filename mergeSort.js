function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const left = mergeSort(arr.slice(0, arr.length/2));
        const right = mergeSort(arr.slice(arr.length/2, arr.length));
        
        arr = [];
        while(left.length > 0 && right.length > 0){
            left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
        }
        return arr.concat(left.length > 0 ? left : right);
    }
}


let arr = [4,8,6,2,1,7,5,3];
let arr2 = [9,8,7,6,5,4,3,2,1]
let arr3 = [2,6,8,1,3,5,7,4]

console.log(mergeSort(arr))
console.log(mergeSort(arr2))
console.log(mergeSort(arr3))