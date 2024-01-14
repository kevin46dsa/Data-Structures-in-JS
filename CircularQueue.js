class CircularQueue{
    constructor(capacity){
        this.items = {}
        this.capacity = capacity
        this.currentSize = 0
        this.rear = -1
        this.front = -1 
    }

    enqueue(element){
        if(this.isFull()) return "Queue is full, operation failed"
        this.rear++

        this.items[this.rear] = element
        this.currentSize++
        if(this.front === -1) this.front ++
    }

    dequeue(){
        if(this.isEmpty()) return "Queue is Empty, operation failed"
        const temp = this.items[this.front]
        delete this.items[this.front]
        this.front ++
        this.currentSize -- 
        return temp
    }

    peek(){
        if(this.isEmpty()) null
        return this.items[this.front]
    }

    isFull(){
        return this.capacity === this.currentSize
    }

    isEmpty(){
       const bool = this.currentSize === 0
       if(bool){
        this.front = -1
        this.rear =-1
        return bool
       }
       else return bool

       

    }

    print(){
        console.log(this.items)
    }
  

}


let circularQueue = new CircularQueue(3)

circularQueue.enqueue(10)
circularQueue.enqueue(30)
circularQueue.enqueue(50)
circularQueue.print()
console.log(circularQueue.enqueue(50)) //to check if it is not going over capacity

console.log(circularQueue.dequeue()) 
console.log(circularQueue.dequeue()) 
console.log(circularQueue.dequeue()) 

console.log(circularQueue.dequeue()) // to check if dequeue limit is working

circularQueue.enqueue(60)
circularQueue.enqueue(70)
circularQueue.print()

console.log(circularQueue.peek())
