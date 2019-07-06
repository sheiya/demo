$("#header").load("header.html",()=>{    
	
	var $login=$("#listLogin"),
        $welcome=$("#listWelcome"),
        $dialogLogin=$("#dialog-login"),
        $form=$dialogLogin.children("form"),
        $txtName=$("#txtName"),
        $txtPwd=$("#txtPwd"),
        $valiTips=$("#valiTips");
		$.get("data/header/isLogin.php")
		.then(data=>{
		  if(data.ok){
			$("#uname").text(data.uname);
			$welcome.show();
			$login.hide();
		  }else{
			$welcome.hide();
			$login.show();
		  }
		});

		console.log(sessionStorage.getItem("data"));
		if(sessionStorage.getItem("data")!=null){
			var liLogin=$("#liLogin");
		 liLogin.html(sessionStorage.getItem("data")+"已登录");
		}
		

		/* */
		$dialogLogin.dialog({
		  autoOpen:false,
		  modal:true,
		  show: { effect: "blind", duration: 500 },
		  hide: { effect: "fade", duration: 500 },
		  buttons:{
			"登录":()=>{
			  if($txtName.val().trim()=="")
				$valiTips.html("用户名不能为空").show();
			  else if($txtPwd.val().trim()=="")
				$valiTips.html("密码不能为空").show();
			  else
				$.post(
				  "data/header/login.php",
				  $form.serialize()
				).then(data=>{
				  if(data.ok){
					location.reload();
				  }else{
					$valiTips.html(data.msg).show();
				  }
				})
			},
			"取消":()=>$dialogLogin.dialog("close")
		  },
		  close:()=>$valiTips.empty().hide()
		});
		$login.find("a").last().click(()=>{
		  $dialogLogin.dialog("open");
		});
		$welcome.find("a").last().click(()=>{
		  $.get("data/header/logout.php")
			.then(()=>location.reload());
		});

		
});

$("#header").on("click",".dropdown-menu-small>li>a",function(e){
	e.preventDefault();
	var city = $(this).html();
	$(".current-city").html(city);
});

$("#header").on("click",".search-btn",function(){
	var target=$(this);
	var kw = $(this).prev().val();
	if(kw.trim().length!=0){
		var url="http://localhost/Complex/book-list.html?kw="+kw;
		location=url;
	}
});

$("#header").on("mouseover",".dropdown",function(){
	var $div=$(this);
	var $menu=$div.children().last();
	$menu.css({height:"auto",opacity:1});
}).on("mouseout",".dropdown",function(){
	var $div=$(this);
	var $menu=$div.children().last();
	$menu.css({height:0,opacity:0});
});
$.ajax({
	type:"get",
	// url:"data/header/nav.php",
	url:"http://localhost:3000/nav",
	success:function(data){
		var html="";
		for(var i=0;i<data.length;i++){
			var f = data[i];
			html+=`
				<li><a href="books.html?fid=${f.fid}">${f.fname}</a></li>
			`;
		}
		$(".dropdown-menu-big").html(html);
		// 分类搜索
		var xianshi=document.querySelector(".type-btn>.xianshi");//查找元素
		var span=xianshi.firstElementChild;
		// 鼠标在分类搜索时显示分类列表
		xianshi.onmouseenter =function(){
			xianshi.style.overflow="auto";
			xianshi.style.height="200px";

		}
		// 鼠标不在分类搜索时不显示分类列表
		xianshi.onmouseleave =function(){
			xianshi.style.overflow="hidden";
			xianshi.style.height="45px";

		}
		//利用冒泡将div xianshi下的p的内容替换到span中
		xianshi.addEventListener("click",function(e){
			var p=e.target;
			span.innerHTML=p.innerHTML;
			
		})

// console.log(xianshi)
	},
	error:function(){
		alert("网络错误");
	}
});
/*加载地区*/
$.ajax({
	type:"get",
	// url:"data/header/province.php",
	url:"http://localhost:3000/province",
	success:function(data){
		// console.log(data);
		var html="";
		for(var i=0;i<data.length;i++){	
			html+=
			`<li><a href="javascript:;">${data[i].pro_name}</a></li> `;
		}
		$(".dropdown-menu-small").html(html);


	},
	error:function(){
		alert("网络错误");
	}
});
/*加载购物车
$.ajax({
	type:"get",
	url:"data/cart/list.php",
	success:function(data){
		var html="";
		var total=0;
		if(data!=null){
			for(var i=0;i<data.length;i++){
				var b = data[i]; 			
				html+=
					`<li data-after="${b.after_price}">
						<img src="${b.pic}" alt="" />
						<div class="cart-count">
							<a class="minusbtn" href="">-</a>
							<input class="bookcount" min="0" type="text" value="${b.count}"/>
							<a class="addbtn" href="">+</a>
						</div>
						<span class="sprice">${b.price}</span>
					</li>
					`;
				total +=parseFloat(b.price);
				total = total.toFixed(2);
			}
			html+=
				`<div class="bottom-button">				
					总计：<span class="total-money">${total}</span>	
				</div>`;
			$(".dropdown-menu-mid").html(html);
		}
		/*加号同步加载
		$(".dropdown-menu-mid").on("click",".minusbtn",function(e){
			e.preventDefault();
			var val = $(".bookcount").val();
			if(val>0){
				val--;
				$(".bookcount").val(val);
				var price = $(this).parent().parent().data("after");
				var sprice = $(".sprice").html();
				var total =$(".total-money").html();
				total =parseFloat(total);
				total-=parseFloat(price);
				total=total.toFixed(2);
				$(".total-money").html(total);
				sprice=parseFloat(sprice);
				sprice-=parseFloat(price);
				sprice=sprice.toFixed(2);
				$(".sprice").html(sprice);
			}
		}).on("click",".addbtn",function(e){
			e.preventDefault();
			var val = $(".bookcount").val();
			val++;	
			$(".bookcount").val(val);
			var price = $(this).parent().parent().data("after");
			var sprice = $(".sprice").html();
			var total =$(".total-money").html();
			total =parseFloat(total);
			total+=parseFloat(price);
			total=total.toFixed(2);
			$(".total-money").html(total);
			sprice=parseFloat(sprice);
			sprice+=parseFloat(price);
			sprice=sprice.toFixed(2);
			$(".sprice").html(sprice);
		});
		
	},
	error:function(){
		alert("网络错误请检查");
	}
});
*/






