/*加载购物车内容*/
function pageLoad(){
	$.ajax({
		type:"get",
		url:"data/cart/list.php",
		success:function(data){
			var html="";
			var total = 0;
			if(data){
				html=`
				<tr>
					<th class="select-all"><input type="checkbox" /></th>
					<th ></th>	
					<th >书名</th>	
					<th >关于本书</th>	
					<th >单本售价</th>	
					<th >数量</th>	
					<th >总价</th>	
					<th ></th>
				</tr>
				`;
				$("#thead1").html(html);
				html=`
					<a class="return-btn" href="#">继续购物</a>
					<a class="clear-btn" href="#">清空购物车</a>
					<a class="pay-btn" href="#">去结算</a>	
				`;
				$("#bottom-area").html(html);
				
				var html = "";
				for(var i=0;i<data.length;i++){
					var b = data[i];
					html+=`
						<tr >
							<td class="btn-select"><input type="checkbox" /></th>
							<td class="book-img"><img src="${b.pic}"/></td>
							<td class="book-name">${b.name}</td>
							<td class="book-intro">${b.produce}</td>
							<td class="book-price">${b.after_price}</td>
							<td class="quantity" data-after="${b.after_price}">
								<div data-bid="${b.bid}" class="cart-count">
									<a class="minusbtn">-</a>
									<input  class="bookcount" min="1" type="text" value="${b.count}"/>
									<a class="addbtn">+</a>
								</div>
							</td>
							<td class="sprice">${b.price}</td>
							<td class="btn-area"><i class="fa fa-close"></i></td>
						</tr>
						`;
					total =parseFloat(total);
					total+=parseFloat(b.price);
					total=total.toFixed(2);
				}
				$("#tbody1").html(html);
				var html="";
				html+=`<p>总计：<span class="total-money">${total}</span></p>`;
				$("#total-area").html(html);


			}
		},error:function(){
			alert("网络故障请检查")
		}
	});
}

pageLoad();
$("#tbody1").on("click",".minusbtn",function(e){
	e.preventDefault();
	var input = $(this).next();
	var li = $(this).parent().parent().next();
	var val = input.val();
	if(val>1){
		val--;
		input.val(val);
		var price = $(this).parent().parent().data("after");		
		var sprice = li.html();
		sprice=parseFloat(sprice);
		sprice-=parseFloat(price);
		sprice=sprice.toFixed(2);
		li.html(sprice);
		var total =$(".total-money").html();
		total =parseFloat(total);
		total-=parseFloat(price);
		total=total.toFixed(2);
		$(".total-money").html(total);
		var count=-1;
		var bid=$(this).parent().data("bid");
		$.ajax({
			type:"post",
			url:"data/cart/add.php",
			data:{count:count,bid:bid},
			success:function(data){
				pageLoad();
			},
			error:function(){
				alert("网络错误！");
			}
		});
	}
	

}).on("click",".addbtn",function(e){
	e.preventDefault();
	var input = $(this).prev();
	var li = $(this).parent().parent().next();
	var val = input.val();
	val++;
	input.val(val);
	var price = $(this).parent().parent().data("after");		
	var sprice = li.html();
	sprice=parseFloat(sprice);
	sprice+=parseFloat(price);
	sprice=sprice.toFixed(2);
	li.html(sprice);
	var total =$(".total-money").html();
	total =parseFloat(total);
	total+=parseFloat(price);
	total=total.toFixed(2);
	$(".total-money").html(total);

	var count=1;
	var bid=$(this).parent().data("bid");
	$.ajax({
		type:"post",
		url:"data/cart/add.php",
		data:{count:count,bid:bid},
		success:function(data){
			pageLoad();
		},
		error:function(){
			alert("网络错误！");
		}
	});
});


$(".select-all input").click = function(){
	$(".btn-select input").css({checked:true});
}
