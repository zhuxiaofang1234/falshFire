// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  toComment:function(){
    wx.navigateTo({
      url: '/pages/comment/index',
    })
  },
  toNotice:function(){
    wx.navigateTo({
      url: '/pages/notice/index',
    })
  },

  //点赞与收藏
  toCollection:function(){
    wx.navigateTo({
      url: '/pages/collection/index',
    })
  },

  //新增粉丝
  toNewFans:function(){
    wx.navigateTo({
      url: '/pages/newFans/index',
    })
  }
})