class Node{
    constructor(nodeVal){
        this.value = nodeVal
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(nodeVal){
        const node = new Node(nodeVal)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size ++
    }

    append(nodeVal){
        const node = new Node(nodeVal)
        if(this.isEmpty()) this.head = node
        else {
           let prev = this.head
           while(prev.next){
            prev = prev.next
           } 
           prev.next = node
         
        }

        this.size++
         
    }



    print(){
        if(this.isEmpty()){
            console.log("Linked List Is Empty")
        }
        else{
            let currNode = this.head
            let list = ''
            while(currNode){
                list += `${currNode.value} -> `
                currNode = currNode.next
            }
            list += "null"
            console.log(list)
        }
    }

    isEmpty(){
        return this.size === 0
    }

    getsize(){
        return this.size
    }
}

let linkedlist = new LinkedList()
linkedlist.print()

linkedlist.prepend(50)

linkedlist.print()

console.log('Size :',linkedlist.getsize())

linkedlist.prepend(40)
linkedlist.prepend(10)

linkedlist.print()

linkedlist.append(90)

linkedlist.print()