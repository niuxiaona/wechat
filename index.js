//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图
    imglist:[
      {id:1,img_url:"/pages/img/index/banner1.jpg"},
      { id: 2, img_url: "/pages/img/index/banner2.jpg" },
      { id: 3, img_url: "/pages/img/index/banner3.jpg" },
      { id: 4, img_url: "/pages/img/index/banner4.jpg" }
    ],
    //九宫格
    navlist:[
      { id: 1, title: "最新客照", img_url: "/pages/img/grid-01.png"}
      ,
      { id: 2, title: "风格展示", img_url: "/pages/img/grid-03.png" },
      { id: 3, title: "最新活动", img_url: "/pages/img/grid-04.png" },
      // { id: 4, title: "乐玛摄影", img_url: "/pages/img/grid-06.png" },
      // { id: 5, title: "场馆介绍", img_url: "/pages/img/grid-06.png" },
      // { id: 6, title: "妆面礼服", img_url: "/pages/img/grid-07.png" },
      // { id: 7, title: "自选摄影师", img_url: "/pages/img/grid-08.png" }
    ],
    navlist1:[
      { id: 1, title: "场馆介绍", img_url: "/pages/img/grid-06.png"},
      { id: 6, title: "妆面礼服", img_url: "/pages/img/grid-07.png" },
      { id: 7, title: "自选摄影师", img_url: "/pages/img/grid-08.png" }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})