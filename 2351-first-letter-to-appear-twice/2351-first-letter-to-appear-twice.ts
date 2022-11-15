function repeatedCharacter(s: string): string {
    const ref = new Map()
    const stringArr = s.split('')
    for(let i = 0; i < stringArr.length; i++) {
        if(!ref.has(stringArr[i])) {
            ref.set(stringArr[i], true)
        } else {
            return stringArr[i]
        }
    }
};