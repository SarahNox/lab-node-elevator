class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.timer;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.timer = setInterval(this.update.bind(this), 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
  update() {
    console.log(this.log());
    this._passengersEnter();
    this._passengersLeave();
    for (let i = 0; i < this.requests.length; i++) {
      if (this.floor === this.requests[i]) {
        this.requests.splice(i, 1);
      }
    }
    if (this.requests[0] > this.floor) {
      this.floorUp();
    } else if (this.requests[0] < this.floor) {
      this.floorDown();
    }
    if (this.requests.length === 0) {
      this.stop();
    }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
     this.floor ++;
   }
  }
  floorDown() {
    if (this.floor > 0) {
     this.floor --;
   }
  }
  _passengersEnter() {
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.floor === this.waitingList[i].originFloor) {
        this.passengers.push(this.waitingList[i]);
        console.log(`${this.waitingList[i].name} has entered the elevator.`);
        this.requests.push(this.waitingList[i].destinationFloor)
        this.waitingList.splice(i, 1);
      }
    }
  }
  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.floor === this.passengers[i].destinationFloor) {
        console.log(`${this.passengers[i].name} has left the elevator.`);
        this.passengers.splice(i, 1);
      }
    }
  }
  call(person) {
    this.waitingList.push(person)
    this.requests.push(person.originFloor);
  }
  log() {
    return `Current floor: ${this.floor}`;
  }
}

module.exports = Elevator;
