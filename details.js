// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [], //美食列表
    pno: 0,  //页码 0
    pageSize: 6  //页大小 6
  },
  loadMore: function () {
    //加载更多的数据
    //1.获取两个数据 pno pageSize
    var p = this.data.pno + 1;  //页码
    var ps = this.data.pageSize;  //页大小
    //1.1显示加载动画效果
    //wx.showLoading({
      //title: '数据努力加载中...',
    //})
    //2.发送请求服务器端程序
    wx.request({
      url: "http://127.0.0.1:3000/shoplist",
      data: { pno: p, pageSize: ps },
      success: (res) => {
        //2.1 下拉操作 当前组件允许即可
        var rows = this.data.list.concat(res.data.data);
        this.setData({
          list: rows,  //保存数据
          pno: p  //保存新页码
        });
        //2.2数据显示完成
        //模拟繁忙网络
        //setTimeout(function () {
         // wx.hideLoading();
        //}, 1500);
      }
    });
    //3.保存服务器返回数据
    //4.提示
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
  //当前组件允许下拉操作
  //shoplist.json
  //"enablePullDownRefresh": true
  onPullDownRefresh: function () {
    //console.log(111);
    //将原先数组数据和页码清空
    this.setData({
      pno: 0,
      list: []
    })
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //数据不正确
    //console.log(123);
    //查看下一页数据
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})