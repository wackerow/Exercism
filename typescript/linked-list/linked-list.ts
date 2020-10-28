class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null, prev: Node<T> | null = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class LinkedList<T> {
  private _count: number = 0;
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  public count(): number {
    return this._count;
  }
  
  public push(value: T): LinkedList<T> {
    // Increment counter
    this._count += 1;
    // Create new Node
    const newNode = new Node<T>(value, null, this.tail)
    // If no head, make this new head
    if (!this.head) {
      this.head = newNode;
    } else {
      // Assign "next" pointer of CURRENT tail to point to newNode
      this.tail!.next = newNode;
    }
    // Then change where "this.tail" points to
    this.tail = newNode;
    // Return self for chaining
    return this;
  }

  public unshift(value: T): LinkedList<T> {
    // Increment counter
    this._count += 1;
    // Create new Node
    const newNode = new Node(value, this.head, null)
    // If no tail, make this new tail
    if (!this.tail) {
      this.tail = newNode;
    } else {
      // Assign "prev" pointer of CURRENT head to point to newNode
      this.head!.prev = newNode;
    }
    // Then change where "this.tail" points to
    this.head = newNode;
    // Return self for chaining
    return this;
  }

  public pop(): T {
    // If empty, throw error
    if (!this.tail) { throw "List empty"}
    
    // Decrement counter
    this._count -= 1;
    // If there is a tail, store it's value
    const returnValue = this.tail!.value;
    // If this.tail has a "prev" point (it's not also the head)
    if (this.tail.prev) {
      // Set that previous nodes "next" pointer to null
      this.tail!.prev.next = null;
      // Then assign as new tail
      this.tail = this.tail!.prev;
    } else {
      // If this.tail is also head (only item)
      this.tail = null;
      this.head = null;
    }
    return returnValue;
   }
   
  public shift(): T {
    // If empty, throw error
    if (!this.head) { throw "List empty"}
    
    // Decrement counter
    this._count -= 1;
    // If there is a head, store it's value
    const returnValue = this.head!.value;
    // If this.head has a "next" point (it's not also the tail)
    if (this.head.next) {
      // Set that next nodes "prev" pointer to null
      this.head!.next.prev = null;
      // Then assign as new head
      this.head = this.head!.next;
    } else {
      // If this.head is also tail (only item)
      this.head = null;
      this.tail = null;
    }
    return returnValue;
  }

  public delete(value: T): LinkedList<T> {
    // If empty, throw error
    if (!this.head) { return this }

    // Search
    let node: Node<T> | null = this.head;
    while (node) {
      // If successful match
      if (node.value === value) {
        // Remove references to this node
        // Reassign next/prev nodes references
        // Reassign this.head or this.tail if needed
        if (node.next && node.prev) {
          node.next!.prev = node.prev;
          node.prev!.next = node.next;
        } else if (node.next && !node.prev) {
          this.head = node.next;
          node.next!.prev = null;
        } else if (!node.next && node.prev) {
          this.tail = node.prev;
          node.prev!.next = null;
        }
        // Decrement counter
        this._count -= 1;
        break;
      }
      node = node.next;
    }
    // Return self for chaining
    return this;
  }
}