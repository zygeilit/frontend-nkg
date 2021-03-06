
export default class ListRecursion {
  
  removeElements(head, val) {
    
    while (head != null && head.val == val) {
      let delNode = head
      head = head.next
      delNode.next = null
    }

    if (head == null) {
      return null
    }

    let prev = head;
    while (prev.next != null) {
      if (prev.next.val == val) {
        let delNode = prev.next
        prev.next = delNode.next
        delNode.next = null
      } else {
        prev = prev.next
      }
    }

    return head
  }

  removeElementsSample(head, val) {

    while (head != null && head.val == val) {
      head = head.next
    }

    if (head == null) {
      return null
    }

    let prev = head
    while (prev.next != null) {
      if (prev.next.val == val) {
        prev.next = prev.next.next
      } else {
        prev = prev.next
      }
    }
  }

  removeElementsDummyHead(head, val) {
    
    let dummyHead = new ListNode(-1)
    dummyHead.next = head

    let prev = dummyHead
    while (prev.next != null) {
      if (prev.next.val == val) {
        prev.next = prev.next.next
      } else {
        prev = prev.next
      }
    }

    return dummyHead.next
  }
}
