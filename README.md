# Use this package to create a linked list

## Installation

`npm i @wyfy/linked-list`

## Create a list

```javascript
import LinkList from '@wyfy/linked-list
const list = new LinkList()
```

## Add a new node from tail

`list.addNodeTail({name: 'abc'})`

- This will create a node with the ID, value and next property.
- The param can be anything and will be stored in the node's value property

## Add a new node from head

`list.addNodeHead({name: 'abc'})`

## Find a node by ID

`list.findNode(1)`

- Find a node by its ID. A node ID is incremented from 0 and has the value of its order of insertion

## Delete a node by ID

`list.deleteNode(1)`

- Delete a node with the input ID
