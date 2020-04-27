/* var twoSum = function (nums: number[], target: number): number[] {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (i != j && nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}; */
//twoSum([2, 7, 11, 15], 9)



var twoSum = function (nums: number[], target: number): number[] {
    let i = nums.length
    while (i > 1) {
        let a = nums.pop()
        if (nums.indexOf(target - a) > -1) {
            return [nums.indexOf(target - a), nums.length]
        }
        i--
    }

};

console.log(twoSum([1, 2, 7, 11, 15], 9))