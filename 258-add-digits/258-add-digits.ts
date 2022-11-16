function addDigits(num: number): number {
    if (num < 10) {
        return num
    }
    const strArr = num.toString().split('')
    const numArr = strArr.map(num => parseInt(num))
    const reduced = numArr.reduce((accum, itir) => accum + itir, 0)
    
    return addDigits(reduced)
};