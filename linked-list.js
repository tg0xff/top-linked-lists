class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
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
    this.tail.nextNode = node;
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
    this.size--;
  }
  at(index) {
    let node = this.head;
    for (let i = 0; node !== null && i < index; i++) {
      node = node.nextNode;
    }
    return node ?? -1;
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
}
