import LinkList from '../src'

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
})
