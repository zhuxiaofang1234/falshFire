var sliderWidth = 18; // 需要设置slider的宽度，用于计算中间位置
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
    this.setData({
      sliderLeft:(36 - sliderWidth) / 2,
      sliderOffset:122
    });
    
  },
  tabClick: function (e) {
    //console.log(e.currentTarget.offsetLeft);
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});