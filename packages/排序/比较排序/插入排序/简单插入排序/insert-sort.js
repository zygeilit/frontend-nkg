
function insertSort(arr) {
    let len = arr.length;
    let preIndex, current;
    
    for (let i=1; i<len; i++) {
        preIndex = i - 1;
        current = arr[i];

        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]; // 把上一个挪到后面（现在）
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }

    return arr;
}

console.log(insertSort([234,52,4,67,7,23,2,9,32]))
