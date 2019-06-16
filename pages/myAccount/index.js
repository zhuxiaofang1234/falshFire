// pages/myAccount/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["作品", "草稿", "收藏", '点赞'],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },

  onLoad: function () {
    var that = this;
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})