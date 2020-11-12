export type LinkNode = {
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

  /**
   * @remarks
   * Adds a new node from the tail,
   * every node is an object with id, value and next property,
   * @param value
   * Will be stored in the node's value property
   * @returns
   * The newly added node
   */
  addNodeTail = (value: any): LinkNode => {
    this.length++

    const node = {
      id: this.length,
      value,
      next: null,
    }

    if (!this.head) {
      this.head = node
      return this.head
    }
    if (this.head && !this.head.next) {
      this.tail = node
      this.head.next = node
      return this.tail
    }

    ;(this.tail as LinkNode).next = node
    this.tail = node
    return this.tail
  }

  /**
   * @remarks
   * Adds a new node from the head,
   * every node is an object with id, value and next property
   * @param value
   * will be stored in the node's value property
   * @returns
   * The newly added node
   */
  addNodeHead = (value: any): LinkNode => {
    this.length++

    const node = {
      id: this.length,
      value,
      next: null,
    }

    if (!this.head) {
      this.head = node
      return this.head
    }
    if (this.head && !this.head.next) {
      this.tail = this.head
      this.head = node
      this.head.next = this.tail
      return this.head
    }
    const tempHead = this.head
    this.head = node
    this.head.next = tempHead
    return this.head
  }

  findNode = (id: number) => {
    if (this.length === 0) return 'List is empty'

    let currentNode = this.head as LinkNode

    for (let index = 0; index < this.length; index++) {
      if (currentNode.id === id) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  deleteNode = (id: number) => {
    if (this.length === 0) return 'List is empty'

    let currentNode = this.head as LinkNode
    let prevNode: null | LinkNode = null

    for (let index = 0; index < this.length; index++) {
      if (currentNode.id === id) {
        this.length--
        if (prevNode) {
          prevNode.next = currentNode.next
          return currentNode
        }
        this.head = currentNode.next
        return currentNode
      }
      prevNode = currentNode
      currentNode = currentNode.next
    }
  }
}

export default LinkList
