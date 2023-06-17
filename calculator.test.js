const Calculator = require('./calculator ');
const myObj = new Calculator();

describe('Calculator',()=>{
     //ADD METHODS
    describe('Add',()=>{
        test('It is adding two numbers',()=>{
            expect(myObj.add(2,5)).toBe(7);
        });
        test('It is adding two numbers',()=>{
            expect(myObj.add(10,2)).toBe(12);
        });
        test('It is adding two numbers',()=>{
            expect(myObj.add(140,200)).toBe(340);
        });
    });
      //SUBTRACT METHODS
    describe('Substract',()=>{
        test('It is subtracting first num from second num',()=>{
            expect(myObj.subtract(2,5)).toBe(-3);
        });
        test('It is subtracting first num from second num',()=>{
            expect(myObj.subtract(10,2)).toBe(8);
        });
        test('It is subtracting first num from second num',()=>{
            expect(myObj.subtract(140,200)).toBe(-60);
        });
    });

    //MULTIPY METHODS
    describe('Multiply',()=>{
        test('It is multiplying two numbers',()=>{
            expect(myObj.multiply(2,5)).toBe(10);
        });
        test('It is multiplying two numbers',()=>{
            expect(myObj.multiply(10,2)).toBe(20);
        });
        test('It is multiplying two numbers',()=>{
            expect(myObj.multiply(140,200)).toBe(28000);
        });
    });

    //DIVIDE METHODS
    describe('Divide',()=>{
        test('It is dividing first number to second number',()=>{
            expect(myObj.divide(10,5)).toBe(2);
        });
        test('It is dividing first number to second number',()=>{
            expect(myObj.divide(20,4)).toBe(5);
        });
        test('It is dividing first number to second number',()=>{
            expect(myObj.divide(140,2)).toBe(70);
        });
    });
});








