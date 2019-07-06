
var n=document.getElementsByTagName("input");
var s=document.getElementsByTagName("span");
var uname=n[0];//用户名
var upwd=n[1];//密码
var udbpwd=n[2];//确认密码
var uemil=n[3];//邮箱
var uphone=n[4];//手机号
//验证用户名
var regName=/^[A-Za-z0-9]{5,10}$/
//验证用户名
var regPwd=/^[A-Za-z0-9]{6,8}$/
//验证邮箱
var regEmil=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
//验证手机号
var regPhone=/^((\+86|0086)\s+)?1[3-8]\d{9}$/
function submit(){
   console.log(s); 
  if (regName.test(uname.value)) {
      console.log(uname.value);
  }else{console.log("用户名不正确")}
  if (regPwd.test(upwd.value)) {
      console.log(upwd.value);
  }else{console.log("密码不对")}
  if(upwd.value==udbpwd.value&&udbpwd.value!=""){
      console.log(udbpwd.value)
  }else{console.log("两次不一致")}
  
  if (regEmil.test(uemil.value)) {
    console.log(uemil.value);
}else{
    console.log("邮箱不正确")
}
  if (regPhone.test(uphone.value)) {
    console.log(uphone.value);
}else{
    console.log("手机号不正确")
}
   
}