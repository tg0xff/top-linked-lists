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
}
