/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    let result = 1;
    if(nums.length == 0){
        return 0
    }
    // in dp contains all subsequence length;
    // [10,9,2,5,3,7,101,18]
    // [1,0,0,0,0,0,0,0] // step 1
    // [1,1,0,0,0,0,0,0] // step 2. 9 < 10 so numbers are not growing.
    // [1,1,1,0,0,0,0,0] // step 3. 2 < 10 || 9 so numbers are not growing.
    // [1,1,1,2,0,0,0,0] // step 4. 5 > 2 -> dp[indexOf(2)  == 2] == 1; dp[i] = 1 + 1(beucase 1 more element in sequense)
    // [1,1,1,2,2,0,0,0] // step 5. 3 > 2 -> dp[indexOf(2) == 2] == 1; dp[i] = 1 + 1
    // [1,1,1,2,2,3,0,0] // step 6. 7 > 3 -> dp[indexOf(3) == 4] == 2; dp[i] = 2 + 1;
    // [1,1,1,2,2,3,4,0] // step 7. 101 > 7 -> dp[indexOf(7) == 5] == 3; dp[i] = 3 + 1;
    // [1,1,1,2,2,3,4,4] // step 8. 10 > 7 -> dp[indexOf(7) == 5] == 3; dp[i] = 3+1;
    // If we have array like [10,9,2,5,3,7,101,102]; then
    // [1,1,1,2,2,3,4,4,5] // step 9 102 > 101; dp[indexOf(101) == 6] == 4; dp[i] = 4 +1;
    for(let i = 1;i<nums.length;i++){
        let max_length = 0
        for(let j = 0; j<i;j++){
            if(nums[i] > nums[j]){
                max_length = Math.max(max_length, dp[j])
            }
        }
        dp[i] = max_length + 1;
        result = Math.max(dp[i], result);
    }
    return result
};