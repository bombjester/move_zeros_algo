var moveZeroes = function(nums) {
   var reset = 1;
    var length = nums.length;
    var counter = 0;
    var x = 0;
   while(reset == 1){
       reset = 0;
        for (x in nums){
            if(nums[x] == 0){
                nums.splice(x, 1);
                counter ++;
               
            }
        }
        for(y in nums){
            if (nums[y] == 0){
                reset = 1;
            }
        }
       
   }
       
    
    for(var i = 1; i <= counter; i++){
        nums.push(0);
    }
    console.log(nums);
};