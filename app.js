//0.下载mysql express模块
//1.引入二个模块 mysql express
const mysql=require("mysql");
const express=require("express");

//1.1引入模块cors
const cors=require("cors");
//2.创建连接池,很大提高效率
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"lema"
});
//3.创建express对象
var server=express();
//3.1配置允许访问列,脚手架8080
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));
//3.2配置静态资源目录 public
server.use(express.static("public"));
//3.3配置第三方中间件
const bodyParse=require("body-parser");
//3.4配置json是否是自动转换
server.use(bodyParse.urlencoded({extended:false}))
//4.为express对象绑定监听端口 3000
server.listen(3000);

//功能一：微信小程序返回美食列表
//分页显示
server.get("/shoplist",(req,res)=>{
  //1.获取二个参数 pno pageSize
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  //2.设置默认值    1    7
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=7;
  }
  //3.创建sql 查询当前页内容
  var sql="SELECT lid,month,sheying,style,img,point FROM lema_style_show";
  sql+=" LIMIT ?,?"
  //4.发送sql 获取结果
  var offset=(pno-1)*pageSize;
  pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    //5.将查询结果发送客户端
    if(err) throw err;
    res.send({code:1,data:result});
  })
})