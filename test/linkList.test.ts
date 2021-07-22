import { isTypeReferenceNode } from 'typescript'
import LinkList from '../src'
import { LinkNode } from '../src'

describe('Link List', () => {
  let list: LinkList | null

  beforeEach(() => {
    list = new LinkList()
  })

  it('should create an empty list', () => {
    expect(list.length).toEqual(0)
  })

  it('should add a first node as first head from tail', () => {
    list.addNodeTail(1)
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual(1)
    expect(list.head.id).toEqual(1)
  })

  it('should add one node as first tail from tail', () => {
    list.addNodeTail({ name: 'duy' })
    list.addNodeTail({ name: 'wyfy' })

    expect(list.length).toEqual(2)

    expect(list.tail.id).toEqual(2)
    expect(list.tail.value).toEqual({ name: 'wyfy' })

    expect(list.head.id).toEqual(1)
    expect(list.head.value).toEqual({ name: 'duy' })
  })

  it('should add one node from tail', () => {
    list.addNodeTail({ name: 'duy' })
    list.addNodeTail({ name: 'wyfy' })
    list.addNodeTail({ name: 'alex' })

    expect(list.length).toEqual(3)

    expect(list.tail.id).toEqual(3)
    expect(list.tail.value).toEqual({ name: 'alex' })

    expect(list.head.id).toEqual(1)
    expect(list.head.value).toEqual({ name: 'duy' })

    expect(list.head.next.value).toEqual({ name: 'wyfy' })
    expect(list.head.next.id).toEqual(2)
    expect(list.head.next.next.value).toEqual({ name: 'alex' })
  })

  it('should add a first node as first head from head', () => {
    list.addNodeHead({ name: 'duy' })
    expect(list.length).toEqual(1)
    expect(list.head.value).toEqual({ name: 'duy' })
    expect(list.head.id).toEqual(1)
  })

  it('should add one node as new head from head', () => {
    list.addNodeHead({ name: 'duy' })
    list.addNodeHead({ name: 'wyfy' })

    expect(list.length).toEqual(2)

    expect(list.tail.id).toEqual(1)
    expect(list.tail.value).toEqual({ name: 'duy' })

    expect(list.head.id).toEqual(2)
    expect(list.head.value).toEqual({ name: 'wyfy' })
  })

  it('should add one node from head', () => {
    list.addNodeHead({ name: 'duy' })
    list.addNodeHead({ name: 'wyfy' })
    list.addNodeHead({ name: 'alex' })

    expect(list.length).toEqual(3)

    expect(list.tail.id).toEqual(1)
    expect(list.tail.value).toEqual({ name: 'duy' })

    expect(list.head.id).toEqual(3)
    expect(list.head.value).toEqual({ name: 'alex' })

    expect(list.head.next.value).toEqual({ name: 'wyfy' })
    expect(list.head.next.id).toEqual(2)
    expect(list.head.next.next.value).toEqual({ name: 'duy' })
  })

  it('should find a node with id', () => {
    list.addNodeHead({ name: 'duy' })
    list.addNodeHead({ name: 'wyfy' })
    list.addNodeHead({ name: 'alex' })

    const node = list.findNode(2) as LinkNode
    expect(node.value).toEqual({ name: 'wyfy' })
  })

  it('should return a string if find a node with empty list', () => {
    const node = list.findNode(1)
    expect(node).toEqual('List is empty')
  })

  it('should delete a node with id', () => {
    list.addNodeHead({ name: 'duy' })
    list.addNodeHead({ name: 'wyfy' })
    list.addNodeHead({ name: 'alex' })

    const node1 = list.deleteNode(1) as LinkNode
    const node3 = list.deleteNode(3) as LinkNode

    expect(list.length).toEqual(1)

    expect(node1).toHaveProperty('id', 1)
    expect(node1).toHaveProperty('value', { name: 'duy' })
    expect(list.head.value).toEqual({ name: 'wyfy' })

    expect(node3.id).toEqual(3)
  })

  it('should return a string if delete a node with empty list', () => {
    const node = list.deleteNode(1)
    expect(node).toEqual('List is empty')
  })

  it('should reverse the list', () => {
    list.addNodeHead({ name: 'a' })
    list.addNodeTail({ name: 'b' })
    list.addNodeTail({ name: 'c' })
    list.addNodeTail({ name: 'd' })
    console.log('length', list.length)

    list.reverse(list.head, null, null)
    list.printList(list.head)

    expect(list.head.value).toEqual({ name: 'd' })
    expect(list.head.next.value).toEqual({ name: 'c' })
    expect(list.head.next.next.value).toEqual({ name: 'b' })
    expect(list.head.next.next.next.value).toEqual({ name: 'a' })
  })
})
