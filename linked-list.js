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
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head.value = null;
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
    const prevNode = this.at(this.size - 2);
    const deletedNode = prevNode.nextNode;
    deletedNode.value = null;
    prevNode.nextNode = null;
    this.tail = prevNode;
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
    // An index equal to this.size would technically be valid, as it
    // would be equivalent to this.append();
    if (index < 0 || index > this.size) return;
    const newNode = new Node();
    newNode.value = value;
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    const prevNode = this.at(index - 1);
    const displacedNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
    newNode.nextNode = displacedNode;
    this.size++;
  }
  removeAt(index) {
    if (index < 0 || index > (this.size - 1)) return;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
    const prevNode = this.at(index - 1);
    const deletedNode = prevNode.nextNode;
    const nextNode = deletedNode.nextNode;
    prevNode.nextNode = nextNode;
    deletedNode.value = null;
    deletedNode.nextNode = null;
    this.size--;
  }
}
