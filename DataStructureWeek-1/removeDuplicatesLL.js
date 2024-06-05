class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class removeDuplicate {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }
    
    append(value){
        const node  = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    removeDuplicates(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let current = this.head;
            while (current && current.next) {
                if(current.value === current.next.value){
                    current.next = current.next.next;
                }else{
                    current = current.next;
                }
            }
        }
    }
    
    getSize(){
        let count = 0;
        let current =  this.head;
        while(current !== null){
            count++;
            current = current.next;
        }
        return count;
    }

    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let current = this.head;
            let values = "";
            while(current){
                values+=`${current.value} `;
                current = current.next;
            }
            console.log("values = ", values);
        }
    }
}

const list = new removeDuplicate();
list.append(10);
list.append(20);
list.append(20);
list.append(30);
list.append(40);
list.append(40);
list.print()
console.log("Size of the LL = ", list.getSize());
list.removeDuplicates(); 
list.print()
console.log("Size of the LL = ", list.getSize());
