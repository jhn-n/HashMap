class Node {
  constructor() {
    this.key = null;
    this.value = null;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node();
    newNode.key = key;
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let nodePtr = this.head;
    while (nodePtr.nextNode !== null) {
      nodePtr = nodePtr.nextNode;
    }
    nodePtr.nextNode = newNode;
  }

  size() {
    let size = 0;
    let nodePtr = this.head;
    while (nodePtr !== null) {
      size++;
      nodePtr = nodePtr.nextNode;
    }
    return size;
  }

  overwriteValue(key, value) {
    let nodePtr = this.head;
    while (nodePtr !== null) {
      if (nodePtr.key === key) {
        nodePtr.value = value;
        return true;
      }
      nodePtr = nodePtr.nextNode;
    }
    return false;
  }

  getValue(key) {
    let nodePtr = this.head;
    while (nodePtr !== null) {
      if (nodePtr.key === key) {
        return nodePtr.value;
      }
      nodePtr = nodePtr.nextNode;
    }
    return null;
  }

  hasKey(key) {
    let nodePtr = this.head;
    while (nodePtr !== null) {
      if (nodePtr.key === key) {
        return true;
      }
      nodePtr = nodePtr.nextNode;
    }
    return false;
  }

  removeKey(key) {
    // empty list
    if (this.head === null) {
      return false;
    }

    // deal with first element in list
    if (this.head.key === key) {
      this.head = this.head.nextNode;
      return true;
    }
    if (this.head.nextNode === null) {
      return false;
    }

    // at least two elements in list
    let priorNode = this.head;
    let currentNode = this.head.nextNode;
    while (currentNode !== null) {
      if (currentNode.key === key) {
        priorNode.nextNode = currentNode.nextNode;
        return true;
      }
      priorNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  toString() {
    let s = "";
    let nodePtr = this.head;

    while (nodePtr !== null) {
      s = `${s}( ${nodePtr.key} : ${nodePtr.value} ) -> `;
      nodePtr = nodePtr.nextNode;
    }
    return s + "null";
  }

  toArray() {
	const a = [];
    let nodePtr = this.head;
	while(nodePtr !== null) {
		a.push({key:nodePtr.key, value:nodePtr.value})
		nodePtr = nodePtr.nextNode;
	}
	return a;
  }
}

// console.log("Test LinkedList");
// const ll = new LinkedList();
// ll.append("Name", "John");
// ll.append("Age", 40);
// ll.append("Colour", "Red");
// console.log(ll.toString());
// console.log(ll.overwriteValue("Agef", 30));
// console.log(ll.toString());
// console.log(ll.overwriteValue("Age", 30));
// console.log(ll.toString());

// getHeadValue() {
// 	if (this.head === null) {
// 		return undefined;
// 	}
// 	return this.head.value;
// }

// getTailValue() {
// 	if (this.head === null) {
// 		return undefined;
// 	}
// 	let nodePtr = this.head;
// 	while (nodePtr.nextNode !== null) {
// 		nodePtr = nodePtr.nextNode;
// 	}
// 	return nodePtr.value;
// }

//   nodeAt(index) {
//     if (index >= this.size()) {
//       return undefined;
//     }
//     let nodePtr = this.head;
//     for (let i = 0; i < index; i++) {
//       nodePtr = nodePtr.nextNode;
//     }
//     return nodePtr.value;
//   }

//   nodePop() {
//     if (this.head === null) {
//       return undefined;
//     }
//     let nodePtr = this.head;
//     if (nodePtr.nextNode === null) {
//       this.head = null;
//       return nodePtr;
//     }
//     while (nodePtr.nextNode.nextNode !== null) {
//       nodePtr = nodePtr.nextNode;
//     }
//     const lastNodePtr = nodePtr.nextNode;
//     nodePtr.nextNode = null;
//     return lastNodePtr;
//   }

//   findIndex(key) {
//     let index = 0;
//     let nodePtr = this.head;
//     while (nodePtr !== null) {
//       if (nodePtr.key === key) {
//         return index;
//       }
//       nodePtr = nodePtr.nextNode;
//       index++;
//     }
//     return null;
//   }

// insertAt(value, index) {
// 	if (index > this.size()) {
// 		return;
// 	}
// 	if (index === this.size()) {
// 		this.append(value);
// 		return;
// 	}
// 	if (index === 0) {
// 		this.prepend(value);
// 		return;
// 	}

// 	let priorNodePtr = this.head;
// 	for (let i = 0; i < index - 1; i++) {
// 		priorNodePtr = priorNodePtr.nextNode;
// 	}
// 	const newNode = new Node();
// 	newNode.value = value;
// 	newNode.nextNode = priorNodePtr.nextNode;
// 	priorNodePtr.nextNode = newNode;
// }
  // prepend(key, value) {
  // 	const newNode = new Node();
  // 	newNode.key = key;
  // 	newNode.value = value;
  // 	newNode.nextNode = this.head;
  // 	this.head = newNode;
  // }
