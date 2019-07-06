SET NAMES UTF8;
DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore CHARSET=UTF8;
USE bookstore;

/**书籍分类**/
CREATE TABLE bs_book_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
/*数据输入*/
INSERT INTO bs_book_family VALUES
(NULL,'文学小说'),
(NULL,'青春校园'),
(NULL,'人文历史'),
(NULL,'社会科学'),
(NULL,'人物传记'),
(NULL,'进口原版'),
(NULL,'少儿读物'),
(NULL,'经济管理'),
(NULL,'艺术摄影'),
(NULL,'科技知识'),
(NULL,'哲学宗教'),
(NULL,'教辅工具');

/**书籍**/
CREATE TABLE bs_book(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #书籍所属分类
  before_price DECIMAL(10,2), #原来价格 
  after_price DECIMAL(10,2),  #现在价格
  bname VARCHAR(32),           #商品名称
  produce VARCHAR(1024),      #书籍介绍
  author VARCHAR(32),         #作者
  public VARCHAR(16),         #出版社
  score INT,                  #评分
  isStock boolean,	      #是否有库存
  pic VARCHAR(128),           #图片
  size VARCHAR(8),            #开本
  packing VARCHAR(8),	      #包装
  pTime DATE,		      #印刷时间
  isGift boolean,	      #是否套装
  mtime DATETIME,
  muid INT
);

insert into bs_book(bid,family_id,before_price,after_price,bname,produce,author,public,score,isStock,pic) values
(NULL,3,23.00,18.40,"我们仨","杨绛以简洁而沉重的语言，回忆先她而去的女儿钱媛、丈夫钱钟书，回忆一家三口那些快乐而艰难、爱与痛的日子。","杨绛","南海出版公司",4,true,"images/product/img/r1.jpg"),
(NULL,2,26.80,21.40,"夏至未至","离夏天最远的地方","郭敬明","南海出版公司",4,true,"images/product/img/r2.jpg"),
(NULL,1,29.00,23.20,"追风筝的人","为你，千千万万遍","胡塞尼","南海出版公司",4,true,"images/product/img/r3.jpg"),
(NULL,1,25.00,16.00,"活着","他的作品成了当代中国的典范","余华","南海出版公司",4,true,"images/product/img/r4.jpg"),
(NULL,1,39.50,28.40,"解忧杂货店","荣登纪伊国屋、诚品、博客来、金石堂各大排行榜，文学救赎励志心理学读物","东野圭吾","南海出版公司",4,true,"images/product/img/r5.jpg"),
(NULL,1,39.50,28.40,"白夜行","《白夜行》被称为东野笔下“很绝望的念想、很悲恸的守望”","东野圭吾","南海出版公司",4,true,"images/product/img/r6.jpg"),
(NULL,1,35.00,24.20,"无声告白","美国年度图书，击败斯蒂芬.金、村上春树等99位大牌作家，摆脱他人的期待，找到真正的自己","伍绮诗(CelesteNg)","南海出版公司",4,true,"images/product/img/r7.jpg"),
(NULL,1,39.50,29.60,"百年孤独","诺贝尔文学奖得主加西亚·马尔克斯魔幻现实主义代表作畅销外国文学小说","加西亚·马尔克斯 ","南海出版公司",4,true,"images/product/img/r8.jpg"),
(NULL,1,19.00,15.20,"小王子","作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。","安东尼·德·圣埃克絮佩里","南海出版公司",4,true,"images/product/img/r9.jpg"),
(NULL,1,48.00,25.40,"月亮与六便士","艺术家的故事以生极落魄、死备哀荣的法国后印象派画家高更的生平为基础。","威廉·萨默塞特·毛姆","南海出版公司",4,true,"images/product/img/r10.jpg"),
(NULL,11,36.00,23.40,"禅与摩托车维修艺术"," 美国大学课程的参考书探寻生命真相、生存本质，行文优美、简洁而动人","罗伯特·M.波西格","南海出版公司",4,true,"images/product/img/r11.jpg"),
(NULL,3,49.90,32.90,"梁冬说庄子:人间世","在《人间世(梁冬说庄子)》中，梁冬以幽默犀利的语言为你深度解读人性中的我执、我慢、我嗔、贪心、刷存在感、苛求别人、自以为是、追求不属于自己的东西等等人性的弱点。","梁冬","江西科学技术出版社",4,true,"images/product/img/r12.jpg"),
(NULL,1,39.00,29.30,"斯通纳","即使不能拥有完美的生活，所幸追求过完整的自我。蒙尘50年后回归大众视野的文学经典。汤姆·汉克斯，麦克尤恩激赏推荐","[美]约翰·威廉斯","上海人民出版社 ",4,true,"images/product/img/r13.jpg"),
(NULL,4,56.00,45.90,"如何阅读一本书","每本书的封面之下都有一套自己的骨架，作为一个分析阅读的读者，你的责任就是要找出这个骨架。","莫提默·J.艾德勒","商务印书馆 ",4,true,"images/product/img/r14.jpg"),
(NULL,3,96.00,59.90,"全球通史","斯塔夫里阿诺斯的这部潜心力作——《全球通史:从史前史到21世纪(第7版修订版)(中文版)(上下册)》自1970年初版问世以来，赞誉如潮，被译成多种语言流传于世，可谓经典之中的经典。","（美）斯塔夫里阿诺斯","北京大学出版社 ",4,true,"images/product/img/r15.jpg"),
(NULL,4,38.00,19.00,"情商高就是把情绪控制好","用大量案例解决情绪给生活、工作造成的难题，从9大维度告诉你如何提高真正的情商","于一鲁 ","贵州人民出版社 ",4,true,"images/product/img/r16.jpg"),
(NULL,2,86.00,43.00,"你好，旧时光","八月长安经典之作，六周年珍藏版，给所有人的记忆之书、共鸣之书。","八月长安","长江文艺出版社 ",4,true,"images/product/img/r17.jpg");
																				
/*书籍详情图片*/
CREATE TABLE book_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  pic VARCHAR(128)
);

INSERT INTO book_pic VALUES
(null,1,"images/products/r1_small1.jpg"),
(null,1,"images/products/r1_small2.jpg"),
(null,1,"images/products/r1_small3.jpg"),
(null,1,"images/products/r1_small4.jpg"),
(null,2,"images/products/r2_small1.jpg"),
(null,2,"images/products/r2_small2.jpg"),
(null,2,"images/products/r2_small3.jpg"),
(null,2,"images/products/r2_small4.jpg"),
(null,2,"images/products/r2_small5.jpg"),
(null,3,"images/products/r3_small1.jpg"),
(null,4,"images/products/r4_small1.jpg"),
(null,5,"images/products/r5_small1.jpg"),
(null,6,"images/products/r6_small1.jpg"),
(null,7,"images/products/r7_small1.jpg"),
(null,8,"images/products/r8_small1.jpg"),
(null,9,"images/products/r9_small1.jpg"),
(null,10,"images/products/r10_small1.jpg"),
(null,11,"images/products/r11_small1.jpg"),
(null,12,"images/products/r12_small1.jpg"),
(null,13,"images/products/r13_small1.jpg"),
(null,13,"images/products/r13_small2.jpg"),
(null,13,"images/products/r13_small3.jpg"),
(null,13,"images/products/r13_small4.jpg"),
(null,13,"images/products/r13_small5.jpg"),
(null,14,"images/products/r14_small1.jpg"),
(null,15,"images/products/r15_small1.jpg"),
(null,16,"images/products/r16_small1.jpg"),
(null,16,"images/products/r16_small2.jpg"),
(null,16,"images/products/r16_small3.jpg"),
(null,16,"images/products/r16_small4.jpg"),
(null,17,"images/products/r17_small1.jpg");

/**用户信息**/			   
CREATE TABLE bs_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT,                  #性别  0-女  1-男
  role INT,                    #1是普通用户，2是管理员
  expire INT			#该用户是否失效	1为失效
);

insert into bs_user values
(null,"bs_001","123456","13@qq.com","17755554444","images/avatar/default.jpg","张三",1,2,0),
(null,"bs_002","123456","13123@qq.com","18855554444","images/avatar/default.jpg","李四",1,2,0),
(null,"bs_003","123456","1tt@qq.com","13355554444","images/avatar/default.jpg","王二",1,2,0),
(null,"bs_004","123456","1www@qq.com","15155554444","images/avatar/default.jpg","刘洋",0,2,0),
(null,"bs_005","123456","132@qq.com","17755554444","images/avatar/default.jpg","晨晨",0,2,0),
(null,"tangtang","123456","13@qq.com","17722224444","images/avatar/default.jpg","丁丹",1,1,0),
(null,"tingting","123456","13123@qq.com","18822224444","images/avatar/default.jpg","范冰冰",0,1,0),
(null,"shanshan","123456","1tt@qq.com","13322224444","images/avatar/default.jpg","张张",1,1,0),
(null,"chenchen","123456","1www@qq.com","15122224444","images/avatar/default.jpg","刘丽",0,1,0),
(null,"zhanzhan","123456","132@qq.com","17722224444","images/avatar/default.jpg","张雪",0,1,0);

/**收货地址信息**/
CREATE TABLE bs_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车**/
CREATE TABLE bs_shopping_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT         #购买数量
);

/*收藏夹*/
CREATE TABLE bs_collection(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT    #商品编号
);

/**用户订单**/
CREATE TABLE bs_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE bs_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE bs_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

INSERT INTO bs_index_carousel VALUES
(NULL,"images/banner/home-header1.jpg","",""),
(NULL,"images/banner/home-header2.jpg","",""),
(NULL,"images/banner/home-header3.jpg","","");

/****畅销榜商品****/
CREATE TABLE bs_rank_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  pro VARCHAR(128),
  book_id INT
);

INSERT INTO bs_rank_product VALUES
(NULL,"我们仨","images/rank/r1.jpg","杨绛以简洁而沉重的语言，回忆先她而去的女儿钱媛、丈夫钱钟书，回忆一家三口那些快乐而艰难、爱与痛的日子。",1),
(NULL,"夏至未至","images/rank/r2.jpg","离夏天最远的地方",2),
(NULL,"追风筝的人","images/rank/r3.jpg","为你，千千万万遍",3),
(NULL,"活着","images/rank/r4.jpg","他的作品成了当代中国的典范",4),
(NULL,"解忧杂货店","images/rank/r5.jpg","荣登纪伊国屋、诚品、博客来、金石堂各大排行榜，文学救赎励志心理学读物",5),
(NULL,"白夜行","images/rank/r6.jpg","《白夜行》被称为东野笔下“很绝望的念想、很悲恸的守望”",6),
(NULL,"无声告白","images/rank/r7.jpg","美国年度图书，击败斯蒂芬.金、村上春树等99位大牌作家，摆脱他人的期待，找到真正的自己",7),
(NULL,"百年孤独","images/rank/r8.jpg","诺贝尔文学奖得主加西亚·马尔克斯魔幻现实主义代表作畅销外国文学小说",8),
(NULL,"小王子","images/rank/r9.jpg","作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。",9),
(NULL,"月亮与六便士","images/rank/r10.jpg","艺术家的故事以生极落魄、死备哀荣的法国后印象派画家高更的生平为基础。",10),
(NULL,"禅与摩托车维修艺术","images/rank/r11.jpg","美国大学课程的参考书探寻生命真相、生存本质，行文优美、简洁而动人",11);

/*今日秒杀商品*/
CREATE TABLE bs_discount_product(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  before_price DECIMAL(10,2),
  after_price DECIMAL(10,2),
  book_id INT
);

INSERT INTO bs_discount_product VALUES
(NULL,"人间世","images/discount/book1.jpg",38.50,29.10,12),
(NULL,"斯通纳","images/discount/book2.jpg",45.32,38.50,13),
(NULL,"如何阅读一本书","images/discount/book3.jpg",32.54,28.50,14),
(NULL,"全球通史","images/discount/book4.jpg",55.32,48.50,15),
(NULL,"情商高就是把情绪控制好","images/discount/book5.jpg",45.32,38.50,16),
(NULL,"你好，旧时光","images/discount/book6.jpg",32.32,25.50,17);


/*每日推荐商品*/
CREATE TABLE bs_daily_product(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  before_price DECIMAL(10,2),
  after_price DECIMAL(10,2),
  book_id INT,
  book_type VARCHAR(16)
);

insert into bs_daily_product values
(NULL,"人间世","images/tesexiaoshuo/xiaoshuob1.jpg",38.50,29.10,7 ,"wenyi"),
(NULL,"人间世","images/tesexiaoshuo/xiaoshuob2.jpg",38.50,29.10,8 ,"wenyi"),
(NULL,"人间世","images/tesexiaoshuo/xiaoshuob3.jpg",38.50,29.10,9 ,"wenyi"),
(NULL,"人间世","images/tesexiaoshuo/xiaoshuob4.jpg",38.50,29.10,10,"wenyi"),
(NULL,"人间世","images/tesexiaoshuo/xiaoshuob5.jpg",38.50,29.10,11,"wenyi"),
(NULL,"人间世","images/ertong/ertongb1.jpg",38.50,29.10,13,"ertong"),
(NULL,"人间世","images/ertong/ertongb2.jpg",38.50,29.10,14,"ertong"),
(NULL,"人间世","images/ertong/ertongb3.jpg",38.50,29.10,15,"ertong"),
(NULL,"人间世","images/ertong/ertongb4.jpg",38.50,29.10,16,"ertong"),
(NULL,"人间世","images/ertong/ertongb5.jpg",38.50,29.10,17,"ertong"),
(NULL,"人间世","images/jingguan/jingguanb1.jpg",38.50,29.10,19,"jingguan"),
(NULL,"人间世","images/jingguan/jingguanb2.jpg",38.50,29.10,20,"jingguan"),
(NULL,"人间世","images/jingguan/jingguanb3.jpg",38.50,29.10,21,"jingguan"),
(NULL,"人间世","images/jingguan/jingguanb4.jpg",38.50,29.10,22,"jingguan"),
(NULL,"人间世","images/jingguan/jingguanb5.jpg",38.50,29.10,23,"jingguan"),
(NULL,"人间世","images/renwen/renwenb1.jpg",38.50,29.10,25,"renwen"),
(NULL,"人间世","images/renwen/renwenb2.jpg",38.50,29.10,26,"renwen"),
(NULL,"人间世","images/renwen/renwenb3.jpg",38.50,29.10,27,"renwen"),
(NULL,"人间世","images/renwen/renwenb4.jpg",38.50,29.10,28,"renwen"),
(NULL,"人间世","images/renwen/renwenb5.jpg",38.50,29.10,29,"renwen"),
(NULL,"人间世","images/yishu/yishub1.jpg",38.50,29.10,31,"yishu"),
(NULL,"人间世","images/yishu/yishub2.jpg",38.50,29.10,32,"yishu"),
(NULL,"人间世","images/yishu/yishub3.jpg",38.50,29.10,33,"yishu"),
(NULL,"人间世","images/yishu/yishub4.jpg",38.50,29.10,34,"yishu"),
(NULL,"人间世","images/yishu/yishub5.jpg",38.50,29.10,35,"yishu"),
(NULL,"人间世","images/keji/kejib1.jpg",38.50,29.10,37,"keji"),
(NULL,"人间世","images/keji/kejib2.jpg",38.50,29.10,38,"keji"),
(NULL,"人间世","images/keji/kejib3.jpg",38.50,29.10,39,"keji"),
(NULL,"人间世","images/keji/kejib4.jpg",38.50,29.10,40,"keji"),
(NULL,"人间世","images/keji/kejib5.jpg",38.50,29.10,41,"keji"),
(NULL,"人间世","images/zhexue/zhexueb1.jpg",38.50,29.10,43,"zhexue"),
(NULL,"人间世","images/zhexue/zhexueb2.jpg",38.50,29.10,44,"zhexue"),
(NULL,"人间世","images/zhexue/zhexueb3.jpg",38.50,29.10,45,"zhexue"),
(NULL,"人间世","images/zhexue/zhexueb4.jpg",38.50,29.10,46,"zhexue"),
(NULL,"人间世","images/zhexue/zhexueb5.jpg",38.50,29.10,47,"zhexue");


/*作家推荐商品*/
#作家信息表
CREATE TABLE index_author(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  aupic VARCHAR(128),
  aname VARCHAR(32),
  auintroduce VARCHAR(64)
);

INSERT INTO index_author VALUES
(NULL,'images/index-author/author1.png','加西亚·马尔克斯','哥伦比亚著名作家，魔幻现实主义文学代表人物。1982年获诺贝尔文学奖。'),
(NULL,'images/index-author/author2.jpg','杨绛','中国女作家、文学翻译家和外国文学研究家'),
(NULL,'images/index-author/author3.jpg','东野圭吾','哥伦比亚著名作家，魔幻现实主义文学代表人物。1982年获诺贝尔文学奖。');

#作品信息表
CREATE TABLE index_author_book(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  before_price DECIMAL(10,2),
  after_price DECIMAL(10,2),
  book_id INT
);

insert into index_author_book values
(NULL,"百年孤独","images/index-author/a1_book1.jpg",38.50,29.10,1),
(NULL,"霍乱时期的爱情","images/index-author/a1_book2.jpg",38.50,29.10,1),
(NULL,"枯枝败叶","images/index-author/a1_book3.jpg",38.50,29.10,1),
(NULL,"没有人给他写信的上校","images/index-author/a1_book4.jpg",38.50,29.10,1),
(NULL,"我们仨","images/index-author/a2_book1.jpg",38.50,29.10,1),
(NULL,"走到人生边上","images/index-author/a2_book2.jpg",38.50,29.10,1),
(NULL,"洗澡","images/index-author/a2_book3.jpg",38.50,29.10,1),
(NULL,"记钱钟书与围城","images/index-author/a2_book4.jpg",38.50,29.10,1),
(NULL,"白夜行","images/index-author/a3_book1.jpg",38.50,29.10,1),
(NULL,"嫌疑人X的献身","images/index-author/a3_book2.jpg",38.50,29.10,1),
(NULL,"恶意","images/index-author/a3_book3.jpg",38.50,29.10,1),
(NULL,"放学后","images/index-author/a3_book4.jpg",38.50,29.10,1);


/*品牌推荐商品*/
#出版社信息表
CREATE TABLE index_public(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  pupic VARCHAR(128),
  puname VARCHAR(32),
  putitle VARCHAR(32)
);

INSERT INTO index_public VALUES
(NULL,'images/index-public/logo1.png','理想国','想象的另一种可能'),
(NULL,'images/index-public/logo2.png','果麦文化','一种更有意义的生活方式'),
(NULL,'images/index-public/logo3.png','单向空间','我们阅读世界');

#书籍信息表
CREATE TABLE index_public_book(
  did INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  pic VARCHAR(128),
  before_price DECIMAL(10,2),
  after_price DECIMAL(10,2),
  book_id INT
);

insert into index_public_book values
(NULL,"理解戈达尔","images/index-public/p1-book1.jpg",38.50,29.10,1),
(NULL,"自由与爱之地","images/index-public/p1-book2.jpg",38.50,29.10,1),
(NULL,"飞行家","images/index-public/p1-book3.jpg",38.50,29.10,1),
(NULL,"三十三年梦","images/index-public/p1-book4.jpg",38.50,29.10,1),
(NULL,"罗曼蒂克消亡史","images/index-public/p2-book1.jpg",38.50,29.10,1),
(NULL,"沉思录","images/index-public/p2-book2.jpg",38.50,29.10,1),
(NULL,"皮囊","images/index-public/p2-book3.jpg",38.50,29.10,1),
(NULL,"十八岁给我一个姑娘","images/index-public/p2-book4.jpg",38.50,29.10,1),
(NULL,"解忧杂货店","images/index-public/p3-book1.jpg",38.50,29.10,1),
(NULL,"撒哈拉的故事","images/index-public/p3-book2.jpg",38.50,29.10,1),
(NULL,"百年孤独","images/index-public/p3-book3.jpg",38.50,29.10,1),
(NULL,"平凡的世界","images/index-public/p3-book4.jpg",38.50,29.10,1);


#地区表
CREATE TABLE province(
  pro_id INT PRIMARY KEY AUTO_INCREMENT,
  pro_name VARCHAR(32)
);

insert into province values
(null,"北京"),
(null,"浙江"),
(null,"江苏"),
(null,"河北"),
(null,"上海"),
(null,"江西"),
(null,"山西"),
(null,"安徽"),
(null,"广东"),
(null,"内蒙古"),
(null,"新疆"),
(null,"福建"),
(null,"辽宁"),
(null,"吉林"),
(null,"云南"),
(null,"西藏"),
(null,"河南"),
(null,"山东"),
(null,"天津"),
(null,"湖北"),
(null,"湖南"),
(null,"广西"),
(null,"海南"),
(null,"重庆"),
(null,"四川"),
(null,"贵州"),
(null,"陕西"),
(null,"甘肃"),
(null,"青海"),
(null,"宁夏"),
(null,"台湾"),
(null,"香港"),
(null,"澳门");
      