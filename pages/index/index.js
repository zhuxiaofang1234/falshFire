var sliderWidth = 36; // 需要设置slider的宽度，用于计算中间位置
const App = getApp();

Page({
  data: {
    tabs: ["推荐", "关注"],
    activeIndex:0,
    sliderOffset: 0,
    sliderLeft: 0,
    arrowShow:false
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      navH: App.globalData.navHeight
    });

    //设置滑块
    var query = wx.createSelectorQuery();
    query.select('#first_nav').boundingClientRect();
    query.exec(function (res) {
      that.setData({
        sliderLeft: (72 - sliderWidth) / 2,
        sliderOffset: res[0].left
      });
    });   
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.dataset.index
    });
  }
});