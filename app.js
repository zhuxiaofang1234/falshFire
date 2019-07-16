//app.js
App({
  onLaunch: function () {
    //获取手机系统信息
    wx.getSystemInfo({
      success:res =>{
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46
      },
      fail(err) {
        console.log(err);
      }
    });

  },
  globalData: {
    navHeight:0
  }
})