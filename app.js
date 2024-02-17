function LinkedList() {
  let list = {
    head: {},
    tail: {},
  };
  function getList() {
    return list;
  }
  function append(value) {
    let nodeToAppend = Node(value);
    if (Object.keys(list.head).length === 0) {
      list.head = nodeToAppend;
      list.tail = nodeToAppend;
    } else {
      let currentNode = list.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = nodeToAppend;
      list.tail = nodeToAppend;
    }
  }
  function prepend(value) {
    let nodeToAppend = Node(value);
    if (Object.keys(list.head).length === 0) {
      list.head = nodeToAppend;
      list.tail = nodeToAppend;
    } else {
      let savedNodes = list.head;
      list.head = nodeToAppend;
      list.head.next = savedNodes;
    }
  }
  function size() {
    let nodeNum = 0;
    let currentNode = list.head;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      nodeNum++;
    }
    return nodeNum;
  }
  function head() {
    return list.head;
  }
  function tail() {
    return list.tail;
  }
  function at(index) {
    let currentNode = list.head;
    while (index !== 0) {
      if (currentNode === null) {
        console('Index out of bounds');
      }
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }
  function pop() {
    if (Object.keys(list.head).length === 0) {
      return undefined;
    } else if (list.head.next === null) {
      // If there is only 1 node
      list.head = {};
      list.tail = {};
      return;
    }
    list.tail = undefined;
    let parentNode = list.head;
    while (parentNode.next.next !== null) {
      // Find the parent Node of the last node
      parentNode = parentNode.next;
    }
    parentNode.next = null;
    console.log(parentNode);
    list.tail = parentNode;
  }
  function contains(value) {
    if (Object.keys(list.head).length === 0) {
      return false;
    }
    let currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  function find(value) {
    if (Object.keys(list.head).length === 0) {
      return null;
    }
    let index = 0;
    let currentNode = list.head.next;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return null;
  }
  function toString() {
    let currentNode = list.head;
    let listString = '';
    while (currentNode !== null) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    listString += 'null';
    return listString;
  }
  function insertAt(value, index) {
    let parentNode = list.head;
    if (index < 0) {
      console.log('Error: Index out of bounds');
      return;
    }
    if (index === 0) {
      prepend(value);
      return;
    }
    for (let i = 0; i < index - 1 && parentNode !== null; i++) {
      parentNode = parentNode.next;
    }
    if (parentNode === null) {
      console.log('Error: Index out of bounds');
      return;
    }
    let childNode = parentNode.next; //Saves the content insde the node
    let nodeToInsert = Node(value);
    parentNode.next = nodeToInsert; // inserts that created node inside the parent
    nodeToInsert.next = childNode; // inserts tbe  content that was previousily there
  }
  function removeAt(index) {
    if (index < 0) {
      console.log('Error: Index out of bounds');
      return;
    }
    if (index === 0) {
      if (!list.head.next) {
        console.log('Error: List is empty');
        return;
      }
      list.head = list.head.next;
      return;
    }
    let parentNode = list.head;
    for (let i = 0; i < index - 1 && parentNode.next; i++) {
      parentNode = parentNode.next;
    }
    if (!parentNode.next) {
      console.log('Error: Index out of bounds');
      return;
    }
    parentNode.next = parentNode.next.next;
  }
  
  
  return {
    getList,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

function Node(value) {
  return { value: value, next: null };
}
let linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.prepend('f');
// console.log(linkedList.size());
// console.log(linkedList.head());
// console.log(linkedList.tail());
// console.log(linkedList.at(2));
// linkedList.pop();
// console.log(linkedList.contains('e'));
// console.log(linkedList.find('a'));
// console.log(linkedList.toString());
// linkedList.insertAt('g', 0);
// linkedList.removeAt(1);
console.dir(linkedList.getList(), { depth: 'null' }); // Allows for it the display the full object
console.log(linkedList.toString());
