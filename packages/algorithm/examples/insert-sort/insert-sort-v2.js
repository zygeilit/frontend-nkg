
export default insertSort = (items) => {
  for(let i=0; i<items.length; i++) {
    let current = items[i]
    let index
    // 交换改成赋值，减少
    // 比同数据规模选择排序快
    // 较为有序的数据，会比选择排序更快
    for(index=i; index>0 && items[index-1] > current; index--) {
      items[index] = items[index - 1]
    }
    items[index] = current
  }
}