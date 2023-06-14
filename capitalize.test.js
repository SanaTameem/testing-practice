const capitalize = require('./capitalize')
test('It is turning a string to a capitalized string',()=>{
    expect(capitalize('sana')).toBe('Sana');
});