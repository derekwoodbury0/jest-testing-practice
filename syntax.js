// syntax example
// test function accepts two arguments, string and callback fn
test('two plus two equates four', () => {
    // expect() is jest function, known as insertion
    expect(2 + 2).toBe(4)
})

// steps for jest test
// invoke global test function
// provide description of test
// provide a callback function to run a test
// inside cb fn, we insert data using expect function
// use matcher fn to declare what we expect the return value to be