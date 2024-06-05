class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class palindromeList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // inserting in the beginning
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    palindrome(value){
        
        let reverse = null;
        let next = null;
        let current = this.head;
        while(current){
            next = current.next;
            current.next = reverse;
            reverse = current;
            current = next;
        }
        while(this.head && this.reverse){
            if(this.head.value!==this.reverse.value){
                return false; 
            }
            this.head = this.head.next;
            this.reverse = this.reverse.next;
        }
        return true;
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty!");
        }else{
            let current = this.head;
            let listValues = "";

            while(current){
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log("List values = ", listValues);
        }
    } 

}

const list = new palindromeList();
console.log("Empty? ", list.isEmpty());
console.log("Size = ", list.getSize());
list.prepend(1);
list.prepend(2);
list.prepend(2);
list.prepend(1);
console.log("Empty? ", list.isEmpty());
console.log("Size = ", list.getSize());
list.print();
console.log(list.palindrome(1,2,2,2));


