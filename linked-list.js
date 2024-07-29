class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node();
    node.value = value;
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.nextNode = node;
    }
    this.tail = node;
    this.size++;
  }
  prepend(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = this.head;
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
    this.size++;
  }
  at(index) {
    let node = this.head;
    for (let i = 0; node !== null && i < index; i++) {
      node = node.nextNode;
    }
    return node;
  }
  pop() {
    const node = this.at(this.size - 2);
    node.nextNode.value = null;
    node.nextNode = null;
    this.tail = node;
    if (this.size === 1) {
      this.head = null;
    }
    this.size--;
  }
  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let node = this.head;
    let index = 0;
    while (node !== null) {
      if (node.value === value) return index;
      node = node.nextNode;
      index++;
    }
    return -1;
  }
  toString() {
    let node = this.head;
    if (node === null) return "null";
    let string = `( ${node.value} )`;
    node = node.nextNode;
    while (node !== null) {
      string += ` -> ( ${node.value} )`;
      node = node.nextNode;
    }
    string += " -> null";
    return string;
  }
  insertAt(value, index) {
    const newNode = new Node();
    newNode.value = value;
    const prevNode = this.at(index - 1);
    const displacedNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
    newNode.nextNode = displacedNode;
    this.size++;
  }
  removeAt(index) {
    const prevNode = this.at(index - 1);
    const deletedNode = prevNode.nextNode;
    const nextNode = deletedNode.nextNode;
    prevNode.nextNode = nextNode;
    deletedNode.value = null;
    deletedNode.nextNode = null;
    deletedNode = null;
    this.size--;
  }
}
