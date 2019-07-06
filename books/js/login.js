  
// 获取姓名输入框
var textName=document.getElementById("textName");
// 获取密码输入框
var textPwd=document.getElementById("textPwd");


// 姓名框的失去焦点事件
textName.onblur=function(){
  
  //console.log(textName.value)  ;
// 定义姓名框的验证规则
var reg=/^\w{6,20}$/;
vali.call(this,reg);
}
// 密码框的失去焦点事件
textPwd.onblur=function(){
// 定义密码框的验证规则
var reg=/^[0-9]{6,16}$/;
vali.call(this,reg);
}


function vali(reg){
  //获取当前文本框
  var input=this;
  //得到它的下一个兄弟
  var p=input.nextElementSibling;
  if(!reg.test(input.value)){
    
      p.style.display="block";
  }else{
    p.style.display="none";
  }
}




var btn=document.getElementById("btn");
	
		btn.onclick=function (){
			// var uname=location.search.split("?")[1].split("&")[0].split("=")[1];
			var uname=textName.value;
			// console.log(uname);
			// var upwd=location.search.split("?")[1].split("&")[1].split("=")[1];
			var upwd=textPwd.value;
			// console.log(upwd);
			//window.open("http://127.0.0.1:5501/index.html","_self");
			 $.ajax({
			 	// type:"get",
			 	type:"post",
				// dataType:"json",
				data:{uname,upwd},
				// data:'uname="dingding"&upwd=123456',
				 url:"http://127.0.0.1:3000/isLogin",
				 
				 success:function(data){
				// success:function(result){
					// console.log(data);
					if (data) {
						location.href="http://127.0.0.1:5500/index.html";
				  sessionStorage.setItem("data",uname)
					}else{
						textPwd.value="";
					alert("用户名或密码错误");
					}
				  
				},
				error:function(){
					// console.log("小伙子认真填")
					textPwd.value="";
					alert("用户名或密码错误");
				}
			})
		}
