const reverseString = require('./reverseString');
test('It is reversing a String ',()=>{
    expect(reverseString('Sana!')).toBe('!anaS');
});