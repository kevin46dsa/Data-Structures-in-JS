class Queue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0 
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear ++
    }

    dequeue(){
        if(this.isEmpty()) return "Queue is Empty"
        let temp = this.items[this.front] // First in first out
        delete this.items[this.front]
        this.front++
        return temp

    }

    peek(){
        if(this.isEmpty()) return null
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    isEmpty(){
        let bool = this.rear - this.front === 0
        if(bool){
            this.rear = 0
            this.front = 0
        }
        return bool
    }

    print(){
        console.log(this.items)
    }

}


let queueOptimised = new Queue

queueOptimised.enqueue(10)
queueOptimised.enqueue(30)
queueOptimised.enqueue(50)
console.log(queueOptimised.dequeue())
queueOptimised.print()
console.log(queueOptimised.isEmpty())
console.log(queueOptimised.peek())
console.log(queueOptimised.size())