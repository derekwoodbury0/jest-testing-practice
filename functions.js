module.exports = {
    add: (num1, num2) => {
        return num1 + num2
    },
    isNull: () => null,
    isUndefined: (value) => value,
    isTruthy: () => true,
    isFalsy: (value) => value,
    isGreaterThan: (value) => value,
    greaterThanOrEqual: (value) => value,
    hello: (arr) => {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            count += arr[i]
        }
        return count
    },
    createUser: (username) => {
        return {
            username}
    },
    newArray: () => {
        return [1,2,3,4]
    }
}