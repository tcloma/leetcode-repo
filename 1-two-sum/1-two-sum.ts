function twoSum(nums: number[], target: number): number[] {
    const comps = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!comps.has(nums[i])) {
            comps.set(target - nums[i], i)
        } else {
            return [comps.get(nums[i]), i]
        }
    }
};