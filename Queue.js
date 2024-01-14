class Queue {
    constructor(){
        this.list = []
    }

    enqueue(element){
        this.list.push(element)
    }

    dequeue(){
        this.list.shift()
    }

    peek(){
        console.log(this.list[0])
    }

    size(){
        console.log(this.list.length)
    }

    print(){
        console.log(this.list)
    }
}
let sample = new Queue()
sample.enqueue(1)
sample.enqueue(2)
sample.enqueue(3)
sample.enqueue(45)
sample.enqueue(4)
sample.enqueue(5)
sample.peek()
sample.size()
sample.dequeue()
sample.print()