var msg="get-element-by-id";

var arr=msg.split("-")
// console.log(arr, typeof arr)
// msg.replace(/[-]/g,function(kw){
//     return kw.toUpperCase();
// });
var arr1=['get'];
// var arr2=[];
for(var i=1;i<arr.length;i++){
    var str=arr[i].charAt(0).toUpperCase();
    var str1=arr[i].slice(1);
    var str2=str+str1;
    arr1.push(str2);
};
console.log(arr1.join(""));
// console.log(typeof arr);
// console.log(arr);