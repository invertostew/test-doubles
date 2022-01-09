const Bulb = require('../src/bulb.js');

const lamp = {
    bulb: new Bulb(),
    isOn: false
};

describe('Bulb', () => {
    test('Creates an instance of Bulb', () => {
        const bulb = new Bulb();
        expect(bulb).toBeInstanceOf(Object);
    });

    test('Has a default shelfLife of 5', () => {
        const bulb = new Bulb();
        expect(bulb.shelfLife).toBe(5);
    });

    test('has a shelfLife of 4 after being switched on once', () =>{
        const bulb = new Bulb();
        bulb.electrify();
        expect(bulb.shelfLife).toBe(4);
    });
});
