function getTotalTop(elem){
  var sum=0;
  do{
    sum+=elem.offsetTop;
    elem=elem.offsetParent;
  }while(elem);
  return sum;
}

/*图片轮播*/
/* 
$.ajax({
	type:"get",
	url:"http://localhost:3000/index",
	success:function(data){
		// console.log(data);
		var html="";
		var len = data.length;
	//	console.log(len);
		for(var i=0;i<len;i++){
			html+=`
				<li>
					<a href="#"><img src="${data[i].img}"/></a>
				</li>	
			`
		}
		// console.log(html);
		$(".wapper").html(html);
		var html="";
		for(var i=0;i<len;i++)
		{
			html+=`<li></li>`;
		}
		$(".circle").html(html);

		// 找到小圆点下的li
		var lis=$(".circle").children();
		var i=0;
		var moved=0;		
		var liwidth = $(".wapper li").width();
		var timer = setInterval(function(){
			$(".wapper").css({left:moved*liwidth});
			// console.log(moved)
			// for(var li of lis){
			// 	li.className="";
			// }
			
			moved--;
			if(moved==-len){
				moved=0;
			}
		
			if (i>=len) {
				i=0;
			}
			lis[i].className="activelun";
				i++;
		},3000);
		
		

		$("#banner-area").on("click",".ck-left",function(e){
			e.preventDefault();
			// console.log(moved);
			moved++;
			if(moved==1){
				moved=-len+1;
			}
			$(".wapper").css({left:moved*liwidth});
		})

		$("#banner-area").on("click",".ck-right",function(e){
			e.preventDefault();
			// console.log(moved);
			moved--;
			if(moved==-len){
				moved=0;
			}
			$(".wapper").css({left:moved*liwidth});
		})

		$(".banner_circle").on("click","li",function(e){
				e.preventDefault();
				var idx = $(this).index();
				moved=-idx;
				$(".wapper").css({left:moved*liwidth});
		});

	},
	error:function(){
		alert("网络错误");
	}
})
*/


 // 设置按钮的颜色
        //   获取当前应该变色的按钮的索引值
        // 找到该元素并设置一个绿色的
        var index=0;//默认第一个按钮是绿色
        var spans=document.querySelectorAll(".linebtn span"); //保存所有的span
        var listName=["list1","list2","list3","list4","list5","list6"];
        var lislb=document.querySelectorAll(".imglist>ul>li");//获取所有的li
        // console.log(lis);
       
        function setLineBtnColor(){
            for(var i=0,len=spans.length;i<len;i++){
                spans[i].style.background="#ccc";
            }
            spans[index].style.background="#45c17c";
        }
		setLineBtnColor();
		
        //向后翻页 将最后一个li的class复制并插入一个中，依次往后挪class
        function nextPic(){
			
			listName.unshift(listName[5]);//把数组最后一个元素复制并插入到第一个位置
			
			listName.pop();//删除最后一个元素
			// console.log(lis);
            for(var i=0,len=lislb.length;i<len;i++){
				
                lislb[i].setAttribute("class",listName[i]);
			}
			
            index++;
            if(index>5){
                index=0;
            }
            setLineBtnColor();//设置按钮的颜色
        }
        // 向前翻页 将第一个li 的class复制并插入到最后一个，删除第一个li的class
        function proPic(){
            listName.push(listName[0]);//把数组一个值复制并插入到数组的最后
            listName.shift();//删除第一个元素
            for(var i=0,len=lislb.length;i<len;i++){
                lislb[i].setAttribute("class",listName[i]);
            }
            index--;
            if(index<0){
                index=5;
            }
            setLineBtnColor();
        }
        var list1=document.querySelector(".list1");//找到第一个li
        var list3=document.querySelector(".list3");//找到第三个li
        var imglist=document.querySelector(".imglist");
       
        // 给第一个和最后一个li都绑定单击事件
		// console.log(imglist)
        imglist.addEventListener("click",function(e){
			e.target.parentNode.getAttribute("class");
			// console.log(e.target.parentNode.getAttribute("class"));
            if(e.target.parentNode.getAttribute("class")=="list3"){
			//    console.log(1); 
			   nextPic();
            }else if(e.target.parentNode.getAttribute("class")=="list1"){
                proPic();
            }
        })

        // 自动轮播
        var m=true;
        var time=setInterval(function(){
            if(m==true){
                nextPic();
            }
            // console.log(m);
        },3000)
        
        var contentlb=document.querySelector(".contentlb");
        contentlb.addEventListener("mouseenter",function(){
            m=false;
            // console.log("yiru"+m);
        })
        contentlb.addEventListener("mouseleave",function(){
            m=true;
            // console.log("yichu"+m);
        })
        

//楼层显示

	var f1TotalTop=getTotalTop(//红
      document.getElementById("f1")
    );
	var popularTop = getTotalTop(document.getElementById("popular-area"));
    //查找id为lift的div保存在变量lift中
    var lift=document.getElementById("lift");
	var re = document.getElementById("to-top");
	window.addEventListener("scroll",()=>{
		var scrollTop=document.body.scrollTop
        ||document.documentElement.scrollTop;
		re.style.display=
        popularTop<=scrollTop+innerHeight/2?
          "block":"none";
	});
    //为window添加滚动事件监听
    window.addEventListener("scroll",()=>{
      //获得页面滚动的高度scrollTop
      var scrollTop=document.body.scrollTop
        ||document.documentElement.scrollTop;
      //如果totalTop<=scrollTop+innerHeight/2
        //让lift显示
      //否则,让lift隐藏
      lift.style.display=
        f1TotalTop<=scrollTop+innerHeight/2?
          "block":"none";
      //只有电梯按钮显示时，才用判断按钮的亮灭
      if(lift.style.display=="block"){
        //定义楼层高度变量FHEIGHT=699
        var FHEIGHT=715;
        //找到class为floor的每个楼层元素fs
        var fs=
          document.querySelectorAll(".floor");
        //遍历fs中每个楼层
        for(var i=0;i<fs.length;i++){
          //获得当前楼层距body顶部的总距离totalTop
          var totalTop=getTotalTop(fs[i]);
          //计算楼层亮灯区域的开始位置
          var start=totalTop-innerHeight/2;
          //计算结束位置end为start+FHEIGHT
          var end=start+FHEIGHT;
          //如果scrollTop>=start且scrollTop<end
          if(scrollTop>=start&&scrollTop<end)
            break;//就退出循环
        }
        //在lift下找到class为lift_item_on的li，将其class恢复为lift_item
        var currLi=lift.querySelector(".lift_item_on")
					// console.log(currLi);
        if(currLi)currLi.className="lift_item";
		//   console.log(i);
		  if (i<fs.length+1) {//目前只有四个楼层
			  //设置lift下第i个li的class为lift_item_on
        lift.querySelector(
          `li:nth-child(${i+1})`
        ).className="lift_item_on";
		  }
        
      }
    });

    //在lift下找class为lift_list下的class为lift_item的所有a保存在as中
    var as=lift.querySelectorAll(
      ".lift_list .lift_item"
    );
    for(let i=0;i<as.length;i++){//遍历as
      //为每个as绑定单击事件
      as[i].onclick=function(){
        //查找id为fi的元素fi
        var fi=
          document.getElementById("f"+(i+1));
        //获得fi距body顶部的总距离totalTop
        var totalTop=getTotalTop(fi);
        //让window滚动到totalTop
        //window.scrollTo(0,totalTop-70);
        $("html,body").stop(true).animate({
          //非css标准属性，jquery中独有
          scrollTop:totalTop-70
        },500);
      }
    }

/*floor使用附加导航(affix)实现内容切换*/
$("#f1,#f2,#f3").on("mouseover","[data-toggle=item]",function(e){
		e.preventDefault();
		var $target = $(e.target);
		var $li = $(e.target).parent();
		if(!$li.hasClass("active")){
			$li.addClass("active")
			   .siblings(".active").removeClass("active");
			$($target.attr("href")).addClass("active")
								   .siblings(".active").removeClass("active");
		}
});

/*畅销榜*/
$.ajax({
	type:"get",
	// url:"data/index/rank.php",
	url:"http://localhost:3000/rank",
	success:function(data){
		var html="";
		html=
			`<li data-toggle="rank">
					<div class="mouseover active" >
						<div class="rank-num"><span>${data[0].pid}</span></div>
						<img src="${data[0].pic}"/>
						<div class="rank-book">
							<span class="rank-title"><a href="bookdetails.html?bid=${data[0].book_id}">${data[0].title}</a></span>
							<span class="rank-pro">${data[0].pro}</span>
						</div>
					</div>
					<div class="mouseout">
						<div class="rank-num"><span>${data[0].pid}</span></div>
						<span class="rank-title"><a href="bookdetails.html?bid=${data[0].book_id}">${data[0].title}</a></span>
					</div>
			</li>
			`;
		for(var i=1;i<data.length;i++){
			var b = data[i];
			html+=
			`<li data-toggle="rank">
					<div class="mouseover">
						<div class="rank-num"><span>${b.pid}</span></div>
						<img src="${b.pic}"/>
						<div class="rank-book">
							<span class="rank-title"><a href="bookdetails.html?bid=${b.book_id}">${b.title}</a></span>
							<span class="rank-pro">${b.pro}</span>
						</div>
					</div>
					<div class="mouseout active">
						<div class="rank-num"><span>${b.pid}</span></div>
						<span class="rank-title"><a href="bookdetails.html?bid=${b.book_id}">${b.title}</a></span>
					</div>
			</li>
			`;
		}
		$(".rank-content").html(html);
	},
	error:function(){alert("网络故障请检查")}

});

$("#rank-list").on("mouseenter","[data-toggle=rank]",function(){
			
	$li = $(this);
	$child = $(this).children();
	$sib = $(this).siblings("li");
		
	if(!$li.children().first().hasClass("active")){
				//console.log($(this).children().last());
		$child.first().addClass("active");
		$child.last().removeClass("active");
		$sib.find(".mouseover").removeClass("active");
		$sib.find(".mouseout").addClass("active");
				
	}
});


/*秒杀区*/
function calc(){
	var endDate=new Date("2019/7/19 00:00");
	var now = new Date();
	var s = parseInt((endDate-now)/1000);
	if(s>0){
		var d=parseInt(s/(3600*24));
		var h=parseInt(s%(3600*24)/3600);
		var m=parseInt(s%3600/60);
		var s=s%60;
		var html="";
		html+=`${d}天${h}时${m}分${s}秒`;
		$("#timer").html(html);
	}else{
		$("#timer").html("秒杀结束");
	}
	
}
var timer = null;
window.onload = function(){
	calc();
	timer=setInterval(calc,500);
}

$.ajax({
	type:"get",
	url:"http://localhost:3000/discount",
	// url:"data/index/discount.php",
	success:function(data){
		var html="";
		for(var i=0;i<data.length;i++){
			var p = data[i];
			html+=
			
			`<div class="product" no>
						<img src="${p.pic}"/>
						<h3 class="product-title">${p.title}</h3>
						<div class="price">
							<span class="after-price">${p.after_price}</span>
							<span class="before-price"><s>${p.before_price}</s></span>
						</div>
						<a class="add-btn" href="bookdetails.html?bid=${data[i].book_id}">查看详情</a>
					</div>
					 <div class="productSibling">
					// 	<p>当你自以为是个“好人”，却总觉得自己处处不顺——在职场上被插刀、在家中被老公（老婆）和孩子无视甚至疏远、以“我为你好”的出发点做事却总被嫌弃……这正是你不了解人性中的危险所致。
					// 	在《梁冬说庄子•人间世》中，梁冬以幽默犀利的语言为你深度解读人性中的我执、我慢、我嗔、贪心、刷存在感、苛求别人、自以为是、追求不属于自己的东西等等人性的弱点。告诉你：在人世间，不管怎么折腾，仅仅做个好人很危险，仅仅做个有心机的人也很危险，仅仅做个没有觉察的人，还很危险。愿我们每个人都活成一个慈悲跟智慧永远并行的凡人
					// 	</p>
					// </div>
			`
		}
		document.getElementById("recommend-content").innerHTML=html;
		// var $p_img=$("#recommend-content");
		// $p_img.mouseenter(function(e){
		// 	e.target.next().css("display","block")
		// })
		// $p_img.mouseleave(function(){
		// 	$(".product").next().css("display","none")
		// })

	},
	error:function(){alert("网络错误");}
});



/*每日推荐楼层加载*/
$.ajax({
	type:"get",
	url:"http://localhost:3000/daily_book",
	// url:"data/index/daily_book.php",
	success:function(data){
		// console.log(data);
		var html="";
		var type=data.b;
		//  console.log(data.b_typte);
		html+=
			`<div id="${type[0].book_type}" class="floor-content active">
		</div>`;
		for(var i=1;i<type.length;i++){
			html+=
			`<div id="${type[i].book_type}" class="floor-content">
			</div>`;
		}
		$(".container").html(html);
		var b = data.b_type;
		var b_type=["#wenyi","#ertong","#jingguan","#renwen","#yishu","#keji","#zhexue"];
		var j=0,m=0;
		// console.log(b);
		while(j<35){
			var html="";
			for(var i=j;i<j+5;i++){
				html+=
					`
					<div class="floor1-product">
					<img src="${b[i].pic}">
					<h3>${b[i].title}</h3>
					<div class="price">
							<span class="after-price">${b[i].after_price}</span>
							<span class="before-price"><s>${b[i].before_price}</s></span>
					</div>
					<a class="add-btn" href="#">查看详情</a>
				</div>`
				
			}
			$(b_type[m++]).html(html);
			
			j+=5;
		}
		var x=$(".container").html();
		
	}
})



/*作家推荐楼层加载*/
$.ajax({
	type:"get",
	url:"http://localhost:3000/author",
	// url:"data/index/author.php",
	success:function(data){
		//  console.log(data);
		var author=data.author,book=data.book;
		// console.log(author);
		var id=["#author1","#author2","#author3"];
		var html="";
		html+=`<li class="active"><a  data-toggle="item" href=${id[0]}>${author[0].aname}</a> </li>`;
		
		for(var i=1;i<author.length;i++){
			html+=`<li><a data-toggle="item" href=${id[i]}>${author[i].aname}</a> </li>`;
		}
		$("#author-title").html(html);
		html="";
		html+=
			`
			<div id="author1" class="floor-content active">
			</div>
			<div id="author2" class="floor-content">
			</div>
			<div id="author3" class="floor-content">
			</div>
		`;

		$(".container2").html(html);
		
		var j=0;
		for(var i=0;i<3;i++){
			var html="";
			html+=`
				<div id="author-show" >
					<div class="author-avator">
						<img src="${author[i].aupic}">
					</div>
					<h3>${author[i].aname}</h3>
					<div class="author-pro">${author[i].auintroduce}</div>
				</div>`;
				
			for(var m=j;m<j+4;m++){
				html+=
					`
					<div class="floor2-product">
						<img src="${book[m].pic}">
						<h3>${book[m].title}</h3>
						<div class="price">
							<span class="after-price">${book[m].after_price}</span>
							<span class="before-price"><s>${book[m].before_price}</s></span>
						</div>
						<a class="add-btn" href="#">查看详情</a>
					</div>`;
			}
			j+=4;
			$(id[i]).html(html);
		}
	},
	error:function(){
		alert("网络故障请检查")
	}
});


/*出版推荐*/
$.ajax({
	type:"get",
	url:"http://localhost:3000/public",
	// url:"data/index/public.php",
	success:function(data){
		// console.log(data);
		var p=data.p,book=data.book;
		var id=["#p1","#p2","#p3"];
		var html="";
		html+=`<li class="active"><a  data-toggle="item" href=${id[0]}>${p[0].puname}</a> </li>`;
		for(var i=1;i<p.length;i++){
			html+=`<li><a data-toggle="item" href=${id[i]}>${p[i].puname}</a> </li>`;
		}
		$("#public-title").html(html);
		html="";
		html+=
			`
			<div id="p1" class="floor-content active">
			</div>
			<div id="p2" class="floor-content">
			</div>
			<div id="p3" class="floor-content">
			</div>
		`;

		$(".container3").html(html);
		
		var j=0;
		for(var i=0;i<3;i++){
			var html="";
			html+=`
				<div id="public-show" >
					<div class="public-avator">
						<img src="${p[i].pupic}">
					</div>
					<h3>${p[i].puname}</h3>
					<div class="public-pro">${p[i].putitle}</div>
				</div>`;
				
			for(var m=j;m<j+4;m++){
				html+=
					`
					<div class="floor3-product">
						<img src="${book[m].pic}">
						<h3>${book[m].title}</h3>
						<div class="price">
							<span class="after-price">${book[m].after_price}</span>
							<span class="before-price"><s>${book[m].before_price}</s></span>
						</div>
						<a class="add-btn">查看详情</a>
					</div>`;
			}
			j+=4;
			
			$(id[i]).html(html);
			
		}
	},
	error:function(){
		alert("网络故障请检查")
	}
});



// 小轮播

	 //当前所在li的下标
    var i=0;
	//每个图片所在li的宽度
    var LIWIDTH=800;
    var DURATION=500;
	//包含图片li的个数
    var LICOUNT=5;
	//获取到包含图片的列表
    var ulImgs=document.getElementById("ul-imgs");
	//获取到下面小圆点的列表
    var ulIdxs=document.getElementById("ul-index");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      //console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
	// console.log(lis)
	//获取左右按钮
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
	//右边的按钮绑定单击事件
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
       // console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
  
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },8000);
    var banner=document.getElementById("banner-b");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
  
    

    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
			  console.log(lis);
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
 

	// 猜你喜欢的轮播开始
		
	// 猜你喜欢的轮播结束