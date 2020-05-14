let a = [1,2,3,4,5,6,7,8]
a.reduce((total, currentItem, currentIndex, arr) => {
    console.log(total, 'total')
    console.log(currentItem, 'currentItem')
    console.log(currentIndex, 'currentIndex')
    console.log(arr, 'arr')
})