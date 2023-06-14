const stringLength = require('./stringLength.js');
// test('It is properly returning the number of charachter in string ',()=>{
//     expect(stringLength('Hello')).toBe(5);
// });

test('It is properly returning the number of charachter in string',()=>{
    expect(stringLength('hello')).toBe(5);
});
test('It is properly returning the number of charachter in string',()=>{
    expect(stringLength('Hello world this is Sana Tameem')).toEqual(new Error('String should be between 1 and 10 chars'));
});