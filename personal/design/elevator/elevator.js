

class Elevator {

    constructor() {
        super();
        this.currentFloor = 0;
        this.direction = 0;

        this.belowQueue = []; // The top will have the largest number, priority queue
        this.topQueue = []; // The top will have the lowest number, priority queue

        this.requestsQueue = {};
    }

    move() {

        if (this.belowQueue.length === 0 && this.topQueue.length === 0) {
            let j = 0;
            for (let i in this.requestsQueue) {
                j = 1;
            }
            if (!j) {
                this.direction = 0;
                return;
            }
        }
        let queueFocus = this.direction === 1 ? this.topQueue : this.belowQueue;

        while (queueFocus.length) {
            let newFloor = queueFocus.pop();
            while (this.currentFloor !== newFloor) {
                if (this.requestsQueue[this.currentFloor] && this.requestsQueue[this.currentFloor].direction === this.direction) {
                    this.stopAtThisFloor()
                    delete this.requestsQueue[this.currentFloor];
                }
                this.currentFloor++;
            }
        }

        this.direction = this.direction === 1 ? -1 : 1;

        this.move();

    }

    addNewButton(i) {
        let currentFloor = this.currentFloor;
        if (i < currentFloor) {
            this.topQueue.push(i);
        } else if (i > currentFloor) {
            this.belowQueue.push(i);
        }
    }


    stopAtThisFloor(floorStop) {
        let checkStream = 1;
        
    }

}