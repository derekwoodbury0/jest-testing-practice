// jest unit tests

const functions = require('../functions')

// check for a specific value

test("two plus two equates four", () => {
    expect(functions.add(2, 2)).toBe(4)
})

// check to not be a specific value

test('two plus two should not be 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

// check for a null value

test('isNull should return a null value', () => {
    expect(functions.isNull()).toBeNull()
})

// check for a value to be undefined

test('isUndefined should return undefined value', () => {
    expect(functions.isUndefined()).toBeUndefined()
})

// check for argument to exist

test('isUndefined should not return an undefined value', () => {
    expect(functions.isUndefined(3)).not.toBeUndefined()
})

//check for truthy values

test('isTruthy should return truthy value', () => {
    expect(functions.isTruthy()).toBeTruthy()
})

// check for a falsey value

test('isFalsey should return falsey value', () => {
    expect(functions.isFalsy(false)).toBeFalsy()
})

test('isFalsy should return a truthy value', () => {
    expect(functions.isFalsy(true)).not.toBeFalsy()
})

// check for a value to be greater than

test('isGreaterThan should return number greater than 5', () => {
    expect(functions.isGreaterThan(6)).toBeGreaterThan(5)
})

// greater than or equal to

test('num is greater than or equal to 8', () => {
    expect(functions.greaterThanOrEqual(8)).toBeGreaterThanOrEqual(8)
})

// less than
    // .toBeLessThan
// less than or equal to
    // .toBeLessThanOrEqual



test('for loop test', () => {
    expect(functions.hello([1,2,3,4])).toBe(10)
})

// test for a user object

test('returns user object with a username of derek', () => {
    expect(functions.createUser('derek')).toEqual({
        username: 'derek'
    })
})

// check number of items in array

test('the array contains four elements', () => {
    expect(functions.newArray()).toContain(4)
})

//describe
const snowcone = {
    delicious: true,
    flavor: 'tigers blood',
    cream: true,
    sour: false,
    quantity: 1
}

describe('testing my snowcone object', () => {
    test('my snowcone isnt sour', () => {
        expect(snowcone.sour).toBeFalsy()
    })
    
    test('my snowcone is delicious', () => {
        expect(snowcone.delicious).toBeTruthy()
    })

    test('my snowcone is tigers blood', () => {
        expect(snowcone.flavor).toEqual('tigers blood')
    })
})