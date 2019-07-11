const chai = require('chai');
const Triangle = require("../Triangle");

chai.should();

const sideValue = 508;
const heightValue = 440;
const areaValue = 111745;

describe('A triangle', () => {
    describe(`with a side length of: ${sideValue}`, () => {
        it(`returns the height of: ${heightValue}`, () => {
            const triangle = new Triangle(sideValue);
            triangle.height.should.equal(heightValue);
        });
        it(`returns the area of: ${areaValue}`, () => {
            const triangle = new Triangle(sideValue);
            triangle.area.should.equal(areaValue);
        });
    });

    describe(`and a height of: ${heightValue}`, () => {
        it('returns the side length', () => {
            const triangle = new Triangle(heightValue);
            triangle.width.should.equal(sideValue);
        });
    });

});
