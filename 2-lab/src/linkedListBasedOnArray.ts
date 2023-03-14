import LinkedListNode from "./linkedListNode.js";

export default class LinkedList extends Array<LinkedListNode> {
  append (value: any) {
    const node = new LinkedListNode(value);
    this.push(node);
  }

  getLength (): number {
    return this.length;
  }

  getByIndex (index: number): LinkedListNode {
    return this[index];
  }

  insert (value: any, index: number) {
    if (index < 0 || index > this.length) throw new Error("Invalid index");
    const node = new LinkedListNode(value);
    this.splice(index, 0, node);
  }

  findFirstByValue (value: any): LinkedListNode {
    for (const node of this) {
      if (node.value === value) return node;
    }
  }

  findLastByValue (value: any): LinkedListNode {
    for (let i = this.length; i >= 0; i--) {
      if (this[i].value === value) return this[i];
    }
  }

  clear () {
    while(this.length > 0) {
      this.pop();
    }
  }

  delete (index: number) {
    if (index < 0 || index > this.length) throw new Error("Invalid index");
    this.splice(index, 1);
  }

  deleteAll (value: any) {
    for (const node of this) {
      if (node.value === value) {
        this.splice(this.indexOf(node), 1);
      }
    }
  }

  printList () {
    const output = [];
    for (const node of this) {
      output.push(`${this.indexOf(node)}. ${node.value}`);
    }
    console.log(output.join(' => '));
  }

  clone (): LinkedList {
    const clone = new LinkedList();
    for (const node of this) {
      clone.append(node.value);
    }
    return clone;
  }

  reverseList () {
    this.reverse();
  }

  extend (list: LinkedList) {
    for (const node of list) {
      this.append(node.value);
    }
  }
}