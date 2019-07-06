$.ajax({
	type:"get",
	// url:"data/collection/list.php",
	url:"http://localhost:3000/list",
	success:function(data){
		if(data){
			var html="";			
			for(var i=0;i<data.length;i++){
				var b=data[i];
				html+=`
			<div class="product">
				<img src="${b.pic}">
				<h3>${b.name}</h3>
				<div class="hover-area">
					<div class="btn-collect">
						<a class="detail-btn"><i class="fa fa-chain"></i></a>
						<a data-bid="${b.bid}" class="cancel-btn no"><i class="fa fa-heart"></i></a>
					</div>
					<p class="book-intro">${b.produce}</p>
				</div>					
			</div>`;
			}
			html+='<div class="clear"></div>'
			$("#collect-item").html(html);
		}
	},
	error:function(){
		alert("网络错误请检查！");
	}
})

$("#collect-item").on("mouseenter",".product",function(e){
	e.preventDefault();
	$(this).children(".hover-area").css({height:300,opacity:0.8});
}).on("mouseleave",".product",function(e){
	e.preventDefault();
	$(this).children(".hover-area").css({height:0,opacity:0});
});

$("#collect-item").on("click",".cancel-btn",function(e){
	e.preventDefault();
	$(this).toggleClass("no");
	var bid = $(this).data("bid");
	$.ajax({
		type:"post",
		// url:"data/collection/add.php",
		url:"http://localhost:3000/add",
		data:{bid:bid},
		success:function(data){
			console.log("yeah");
		},
		error:function(){
			alert("网络错误请检查！");
		}
	})
});