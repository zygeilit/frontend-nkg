function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort([234,52,4,67,7,23,2,9,32]))
