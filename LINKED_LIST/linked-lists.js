class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while(temp !== null){ //* ! = =
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    console.log(this.head.value)
  }
  getTail() {
    console.log(this.tail.value)
  }
  getLength() {
    console.log(this.length)
  }

  push(value) {
    //Agrega una propiedad al final del objeto
    const newNode = new Node(value);
    if(this.head === null){
      this.head = newNode
      this.tail = newNode;
      this.length = 1;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    
    // this.length = this.length + 1;
    // this.length += 1;

  }

  pop() {
    //Quita ultimo elemento dentro del objeto
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else if (this.length > 1) {
        let temp = this.head;
        let pre = this.head;
        while (temp.next !== null) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;

        this.length--;
    }

  }
  shift() {
    //Quita primer elemento dentro del objeto
    let temp = this.head;
    let post = temp.next;
    
    if(post !== null){
      this.head = post
      this.length--;
    }else{
      this.head = null
      this.tail = null
      this.length = 0;
    }
  }
  unshift(value) {
    //Agrega una propiedad al principio del objeto
    const newNode = new Node(value);
    let temp = this.head
    if(this.head !== null){
      this.head = newNode
      this.head.next = temp
    }else{
      this.head = newNode
      this.tail = newNode
    }
    this.length++;
  }
  next(value){
    if (this.length === 0) {
      console.log('No existe ningún nodo en la lista')
    } else if (this.length > 0) {
      let temp = this.head;
      let post = null;
      while(temp.next !== null){
        if(temp.value === value){
          post = temp.next
          break;
        }
        temp = temp.next;
      }
      if(post !== null){
        console.log(post.value)
      }else{
        console.log('No existe un siguiente nodo o no existe valor buscado')
      }
    }
  }
}

const list = new LinkedList(8);

console.log('-------------------------')

list.push(15);
list.push(7);
list.shift();
list.unshift(9)
list.pop();
list.next(15)

console.log(list)
list.printList();
console.log('-------------------------')
// // list.getHead();
// // list.getTail();
// // list.getLength();


