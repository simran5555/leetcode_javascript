//2626. Array Reduce Transformation

var reduce = function(nums, fn, init) {
    var acc = init;
    for(i=0; i<nums.length; i++) {
        acc = acc ? fn(acc, nums[i], i, nums): nums[i]
    }
    return acc;
};
