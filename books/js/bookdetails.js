function pageLoad(){
	var bid=location.search.split("=")[1]||"";
	// console.log(bid);
	$.ajax({
		type:"get",
		url:"http://localhost:3000/bookdetails",
		// url:"data/bookdetails/bookdetails.php?bid="+bid,
		data:{bid},
		success:function(output){
			console.log(output);
			var p = output.pic;
			var data = output.detail;
			var html="";
			html+=`
				<div id="largebanner-area">
				 <img src="${p[0].pic}"/>
				</div>
				<div id="smallbanner-area">
					<a class="backward disabled" href="#">&lt;</a>
					<a class="forward disabled" href="#">&gt;</a>
					<ul id="smallimg_list">`
					for(var i=0;i<p.length;i++){
					html+=`
						<li><img data-pic="${p[i].pic}" src="${p[i].pic}" /></li>`;
					}
					html+=`
						</ul>
				</div>
			`;
			$("#bookbanner-area").html(html);
			/*小图片移动效果*/
			var moved=0,max=p.length-4,LIWIDTH=120;
			if(p.length>4){
				$(".forward").removeClass("disabled");
			}
			
			$("#bookbanner-area").on("click",".backward",function(e){
				e.preventDefault();				
				if(this.className.indexOf("disabled")==-1){	
					if(moved>0){
						moved--; move();					
					}
					if(moved==0){
						$(".backward").addClass("disabled");
					}
				}
			});
			$("#bookbanner-area").on("click",".forward",function(e){
				e.preventDefault();
				if(this.className.indexOf("disabled")==-1){
					if(moved<p.length-4){
						moved++; move();				  
					}
					if(moved==p.length-4){
						$(".forward").addClass("disabled");
					}
				}
			});
			function move(){
				//修改icon_list的left为-moved*LIWIDTH+20
				console.log(moved);
				$("#smallimg_list").css({left:-moved*LIWIDTH});
				$(".forward").removeClass("disabled");
				$(".backward").removeClass("disabled");
			}
			
			//小图片切换，大图片改变
			$("#bookbanner-area").on("click","#smallimg_list img",function(e){
				e.preventDefault();
				console.log("heh");
				var img=$(this).data("pic");
				console.log(img);
				console.log($("#largebanner-area").children());
				$("#largebanner-area").children().attr("src",img);
			})
			
			//放大镜
			

			var html="";
			for(var i=0;i<data.length;i++){
				var b = data[i];
				html+=
					`
					<h2 class="bookname">${b.bname}</h2>
				<div class="bookstar">`;
				for(var j=0;j<b.score;j++){
						html+=`★`;
				}
				html+=
				`
				</div>
				<p class="bookprice">
					<span class="discount-price">${b.after_price}</span>
					<span class="before-price"><s>${b.before_price}</s></span>
				</p>
				<p class="bookauthor">作者: <span class="authorname">${b.author}</span></p>
				<p class="bookpublic">出版社: <span class="publicname">${b.public}</span></p>`;
				if(b.isStock==1){
					html+=`<p class="book_isstock">库存: <span class="bookisstock">有库存</span></p>`;
				}else{
					html+=`<p class="book_isstock">库存: <span class="bookisstock">缺货</span></p>`	;
				}
				html+=
				`
				<p class="book-introduce">${b.produce}</p>
				<div class="book-addcart">
					<div class="cart-count">
						<a class="minusbtn">-</a>
						<input type="text" value="0"/>
						<a class="addbtn">+</a>
					</div>
					<a class="addcartbtn" data-bid="${b.bid}" href="#">加入购物车</a>
					<a class="addfavorite-btn" data-bid="${b.bid}" href="#">收藏</a>
				</div>
				<div class="book-share">
					Share: &nbsp;&nbsp;
					<i class="fa fa-qq"></i>&nbsp;
					<i class="fa fa-wechat"></i>&nbsp;
					<i class="fa fa-weibo"></i>&nbsp;
				</div>`;
				$("#book-information-area").html(html);
			}
			

			$("#book-information-area").on("click",".minusbtn",function(e){
				e.preventDefault();
				var input = $(this).next();
				var val = input.val();
				if(val>0){
					val--;
					input.val(val);
				}				
			}).on("click",".addbtn",function(e){
				e.preventDefault();
				var input = $(this).prev();
				var val = input.val();
				val++;	
				input.val(val);
			});

			$("#book-information-area").on("click",".addcartbtn",function(e){
				if(sessionStorage.getItem("data")==null){
					alert("请先登录！");
				}else{
					e.preventDefault();
					var $this=$(this);
					var bid=$this.data("bid");
					var count=$this.prev().children("input").val();
					$.ajax({
						type:"POST",
						url:"data/cart/add.php",
						data:{bid:bid,count:count},
						success:function(data){
							alert("yeah");
								if(data.code>0){
									console.log(data.msg);
								}	
						},
						error:function(){
							alert("网络错误请检查！");
						}
					});
				}
			});
			
			$("#book-information-area").on("click",".addfavorite-btn",function(e){
				if(sessionStorage.getItem("data")==null){
					alert("请先登录！");
				}else{
					e.preventDefault();
					var $this=$(this);
					var bid=$this.data("bid");					
					$.ajax({
						type:"POST",
						url:"data/collection/add.php",
						data:{bid:bid},
						success:function(data){
							alert("yeah");
								if(data.code>0){
									console.log(data.msg);
								}	
						},
						error:function(){
							alert("网络错误请检查！");
						}
					});
				}
			});

		},
		error:function(){
			alert("网络故障请检查");
		}
	});
}

pageLoad();

