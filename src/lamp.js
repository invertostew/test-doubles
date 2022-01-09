class Lamp {
    constructor(bulb) {
        this.bulb = bulb;
        this.isOn = false;
    }

    switchOn() {
        if (!this.bulb.isWorking) {
            throw new Error('Bulb is dead');
        }

        if (!this.isOn) {
            this.isOn = true;
            this.bulb.electrify();
        }
    }

    switchOff() {
        if (this.isOn) {
            this.isOn = false;
        }
    }
}

module.exports = Lamp;
