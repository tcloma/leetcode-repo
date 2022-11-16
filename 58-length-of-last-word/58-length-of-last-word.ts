function lengthOfLastWord(s: string): number {
   const splitWords = s.split(' ')
   const withoutSpace = splitWords.filter((word) => word !== '')

   return withoutSpace[withoutSpace.length - 1].length
}