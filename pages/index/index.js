var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["推荐", "关注"],
    activeIndex: 0
  },
  onLoad: function () {
   
    
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
  }
});