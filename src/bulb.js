class Bulb {
    constructor() {
        this.shelfLife = 5;
    }

    get isWorking() {
        this.shelfLife > 0;
    }

    electrify() {
        this.shelfLife -= 1;
    }
}

module.exports = Bulb;
