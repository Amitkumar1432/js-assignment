let nums=[-2,1,-3,-4,-1,-22,1,-55,4,-1];
//nums=[1,-2,5,-3,4,8,-15,1];
nums=[-2,1,-3,4,-1,2,1,-5,4];
nums=[-10,-2,-3,-5,-6,-5,-7];
let sum=-Infinity, curSum;
sum=0 //if only positive sum also uncomment else if part
let subarray=[];
var k,l;
for(let i=0;i<nums.length-1;i++){
curSum=nums[i];
for(j=i;j<nums.length;j++){
//curSum=curSum+nums[j];
j==i?curSum=curSum:curSum=curSum+nums[j];
if(curSum>sum){
sum=curSum;
k=i;
l=j;
}
// needed if we don't want a negetive sum
else if(curSum<0 && sum==curSum){
curSum=0;
k=j
console.log(k)
}
}
}
//for printing the subarray
//console.log(k,l)
if(true){
//substring.pop();
for(i=k;i<=l;i++){
subarray.push(nums[i]);
}
}

//console.log("highest sum subarray sum is "+sum,'first index'+k,' last index'+l);
console.log("highest sum contigeous subarray sum is "+sum);
console.log("And contigeous subarray is");
console.log(subarray)