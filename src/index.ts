type LinkNode = {
  id?: number
  value: any
  next?: any
}

class LinkList {
  head: LinkNode | null
  tail: LinkNode | null
  length: number
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  addNodeTail = (value: any) => {
    this.length++

    const node = {
      id: this.length,
      value,
    }

    if (!this.head) {
      this.head = node
      return
    }
    if (this.head && !this.head.next) {
      this.tail = node
      this.head.next = node
      return
    }
    if (this.tail) {
      this.tail.next = node
      this.tail = node
      return
    }
  }

  addNodeHead = (value: any) => {
    this.length++

    const node = {
      id: this.length,
      value,
    }

    if (!this.head) {
      this.head = node
      return
    }
    if (this.head && !this.head.next) {
      this.tail = this.head
      this.head = node
      this.head.next = this.tail
      return
    }
    if (this.tail) {
      const tempHead = this.head
      this.head = node
      this.head.next = tempHead
      return
    }
  }

  findNode = (id: number) => {
    let currentNode = this.head

    for (let index = 0; index < this.length; index++) {
      if (currentNode?.id === id) {
        return currentNode
      }
      currentNode = currentNode?.next
    }
  }

  deleteNode = (id: number) => {
    let currentNode = this.head
    let prevNode: null | LinkNode = null

    for (let index = 0; index < this.length; index++) {
      if (currentNode?.id === id) {
        if (prevNode) {
          prevNode.next = currentNode.next
          return
        }
        this.head = currentNode.next
        return
      }
      prevNode = currentNode
      currentNode = currentNode?.next
    }
  }
}

export default LinkList
