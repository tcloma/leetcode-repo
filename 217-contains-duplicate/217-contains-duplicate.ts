function containsDuplicate(nums: number[]): boolean {
    const uniq = new Set(nums)
    return !(uniq.size === nums.length)
};