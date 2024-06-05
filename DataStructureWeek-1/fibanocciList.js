class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class fibanocciList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    fibanocci(value){
        if(value < 0) return;
        this.append(0);
        if(value > 1){
            this.append(1);
        }

        let a = 0, b = 1;
        for(let i = 2; i<value; i++){
            const nextValue = a + b;
            this.append(nextValue);
            a = b;
            b = nextValue;
        }
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
            console.log("Fibanocci List values = ", listValues);
        }
    } 
}

const list = new fibanocciList();
list.fibanocci(2);
console.log("Empty? ", list.isEmpty());
list.print();