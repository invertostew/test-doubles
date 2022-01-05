const Lamp = require('../src/lamp.js');

describe('Lamp', () => {
    test('Create an instance of Lamp', () => {
        const lamp = new Lamp();
        expect(lamp).toBeInstanceOf(Object);
    });
    test('Has property of isOn with default false', () => {
        const lamp = new Lamp();
        expect(lamp.isOn).toBe(false);
    });
});
