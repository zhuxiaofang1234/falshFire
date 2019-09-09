// pages/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //
  toCommentAction: function() {
    wx.showActionSheet({
      itemList: ['赞', '回复', '查看动态', '删除评论'],
      success: function(res) {
        if (!res.cancel) {
          if (res.tapIndex === 1){
            
          }
          else if (res.tapIndex === 3) {
            wx.showActionSheet({
              itemList: ['确认删除评论'],
              itemColor: '#FF5B5B',
              success: function(res) {
                if (!res.cancel) {
                  console.log(res.tapIndex)
                }
              }
            });
          } 
        }
      }
    });
  }
})