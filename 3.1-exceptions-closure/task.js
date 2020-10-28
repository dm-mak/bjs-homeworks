// Задание №1

function parseCount(number) {
    let parseNumber = Number.parseInt(number)
    if  (isNaN(parseNumber)) {
        const checkError = new Error('Невалидное значение');
        throw  checkError;
    }

    return parseNumber;
}


function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return e;
    }
}

// Задание №2

class Triangle {
    constructor(a,b,c) {
        if ((a+b)<c || (a+c)<b || (b+c)<a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.sideA = a;
            this.sideB = b;
            this.sideC = c;
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        let area = Math.sqrt(p*((p-this.sideA)*(p-this.sideB)*(p-this.sideC))).toFixed(3);
        return Number(area);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        }
    } 
}

