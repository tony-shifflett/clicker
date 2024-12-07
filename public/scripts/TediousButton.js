export class TediousButton {
    constructor(id) {
      this.#id = id;
    }
  
    #id;
    #buttonData = {
      color: "blue",
      timesClicked: 0,
    };
    //accessors
    get id() {
      return this.#id;
    }
    get color() {
      return this.#buttonData.color;
    }
    get timesClicked() {
      return this.#buttonData.timesClicked;
    }
  
    #incrementTimesClicked() {
      this.#buttonData.timesClicked++;
    }
  }
  