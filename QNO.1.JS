var x;
function checkpalindrome(x){
var num=x;
var rev=0;
while(num>0){
rev=rev*10+(num%10);
num=parseInt(num/10);
}
if(rev==x){
return 'true';
}
else
return 'false';
}
// var check=checkpalindrome(1);
// console.log(check);
console.log(checkpalindrome(121));
console.log(checkpalindrome(-121));
//document.getElementById('para').innerHTML=check;

var x;function checkpalindrome(x){var num=x;
 var rev=0;while(num>0){rev=rev*10+(num%10);
num=parseInt(num/10);}if(rev==x){return 'true';}else 'false';}// var check=checkpalindrome(1);//