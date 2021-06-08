class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert last node
    inserLast(data) {
        let node = new Node(data);
        let current;

        //If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    //Print list data
    printListData() {
        let current = this.head;
        
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.inserLast(400);

ll.printListData();