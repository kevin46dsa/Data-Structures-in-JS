class Stack {
    constructor(){
        this.list = []
    }

    push(element){
        this.list.push(element)
    }

    pop(){
        return this.list.pop()
    }

    peek(){
        console.log(this.list[this.list.length - 1])
    }

    size(){
        return this.list.length
    }

    print(){
        console.log(this.list)
    }
}
let sample = new Stack()
sample.push(1)
sample.push(2)
sample.push(3)
sample.push(45)
sample.push(4)
sample.push(5)
sample.print()
sample.peek()
sample.size()
sample.pop()
sample.print()