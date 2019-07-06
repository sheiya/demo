function pageLoad(pno=0){
	var fid = location.search.split("=")[1]||"";
	$.ajax({
		type:"get",
		url:"data/books/books.php?fid="+fid+"&pno="+pno,
		data:{fid:fid,pno:pno},
		success:function(output){
			console.log(output);
			var html = "";
			html+=`
				<div id="booklist-link">
					<img src="images/Grid-banner.png" alt="" />
				</div>
				<div id="row2-area">
					<a href="" class="active">列表</a>	
					<a href="">网格</a>	
					<select name="select" id="orderby">
						<option value="0">按销量</option>
						<option value="1">按信用</option>
						<option value="2">按价格</option>
					</select>
					<span id="bookcount">为您找到<span class="count">${output.count}</span>件商品</span>
				</div>	
				<div id="book-show"></div>
				<div id="pages"><ul></ul></div>
			`;
			$("#col2-area").html(html);
			var html="";
			var data = output.data;
			for(var p of data){
				html+=
					`<div class="bookproduct">
						<div id="book-image">
							<img src="${p.pic}"/>
						</div>
						<div id="book-details">
							<div class="booktitle">${p.bname}</div>
							<div class="bookauthor">
								作者: <span class="author">${p.author}</span>&nbsp;|
								出版社:<span class="public">${p.public}</span>
							</div>
							<h2 class="bookprice">${p.after_price}</h2>
							<div class="bookintroduce">${p.produce}</div>
							<div class="book-btn">
								<a class="addcart-btn" data-bid="${p.bid}" href="#">加入购物车</a>
								<a class="addfavorite" data-bid="${p.bid}" href="#">收藏</a>
								<a class="bookdetail" href="bookdetails.html?bid=${p.bid}">查看详情</a>
							</div>
						</div>
					</div>
					`;
			}
			$("#book-show").html(html);

			$("#book-show").on("click",".addcart-btn",function(e){
				e.preventDefault();
				if($("#listLogin").is(":visible")){
					alert("请先登录！");
				}else{
					var $this=$(this);
					var bid=$this.data("bid");
					var count=1;
					$.ajax({
						type:"post",
						url:"data/cart/add.php",
						data:{bid:bid,count:count},
						success:function(data){
							alert("yeah");
							console.log(bid);
							console.log(count);
							if(data.code>0){
								console.log(data.msg);
							}
						},
						error:function(){
							alert("网络故障请检查");
						}
					});
				}
			});

			$("#book-show").on("click",".addfavorite",function(e){
				e.preventDefault();
				if($("#listLogin").is(":visible")){
					alert("请先登录！");
				}else{
					var $this=$(this);
					var bid=$this.data("bid");
					$.ajax({
						type:"post",
						url:"data/collection/add.php",
						data:{bid:bid},
						success:function(data){
							alert("yeah");
							console.log(bid);
							console.log(count);
							if(data.code>0){
								console.log(data.msg);
							}
						},
						error:function(){
							alert("网络故障请检查");
						}
					});
				}
			});

			var html=$("#col2-area").html();

			var pageCount=output.pageCount,
				pageNo=output.pageNo;
			var lis="";
			for(var i=0;i<pageCount;i++){
			  lis+=(i!=pageNo?`<a href="#">${i+1}</a>`:
				`<a href="#" class="current">${i+1}</a>`);
			}
			var html=
			  `<a href="#" class="previous">&lt;</a>${
				lis
			  }<a href="#" class="next">&gt;</a>`;
			var divPages=document.getElementById("pages");
			divPages.innerHTML=html;
			if(pageNo==0){
			  divPages.firstElementChild.className=
				"previous disabled";
			}else if(pageNo==pageCount-1){
			  divPages.lastElementChild.className=
				"next disabled";
			}else{
			  divPages.firstElementChild.className=
				"previous";
			  divPages.lastElementChild.className=
				"next";
			}
			//作业: 改为利用冒泡
			//只要多个子元素绑定相同的事件，都要把事件绑在父元素上一份即可
			divPages.onclick=e=>{
			  var tar=e.target;//先获得目标元素
			  if(!isNaN(tar.innerHTML)){
				//筛选目标元素: 内容为数字
				pageLoad(tar.innerHTML-1);
			  }
			}
			//找到divPages的第一个子元素，绑定单击事件
			divPages.firstElementChild.onclick=
			  divPages.lastElementChild.onclick=function(){
			  if(this.className.indexOf("disabled")==-1){
				var curr=
				  divPages.querySelector(".current");
				if(this==divPages.children[0])
				  pageLoad(curr.innerHTML-2);
				else pageLoad(curr.innerHTML);
			  }
			}
		}
	});
}

pageLoad(0);