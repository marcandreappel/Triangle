/**
 * Triangle JS.
 *
 * A class for handling several tasks with triangles.
 *
 * @link   https://github.com/marcandreappel/Triangle
 * @author Marc-André Appel <marc-andre@appel.fun>
 */

class Triangle {

    #value;

    /**
     * @constructor
     * @param value Depending on
     */
    constructor(value) {
        this.value = value;
    }

    get height() {
        return this.calcHeight();
    }

    get width() {
        return this.calcWidth();
    }

    get area() {
        return this.calcArea();
    }

    /**
     * height = (side * √3) / 2
     *
     * @returns {number}
     */
    calcHeight() {
        return Math.round((this.value * Math.sqrt(3)) / 2);
    }

    /**
     * width = 2 * (height / √3)
     *
     * @returns {number}
     */
    calcWidth() {
        return Math.round(2 * (this.value / Math.sqrt(3)));
    }

    /**
     * area = (side² * √3) / 4
     */
    calcArea() {
        return Math.round(((this.value ** 2) * Math.sqrt(3) / 4));
    }
}
