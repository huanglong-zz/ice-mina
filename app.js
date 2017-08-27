import './style/base.sass'
import './vendor'

// app.js
App({
  async getUserInfo () {
    if (this.globalData.userInfo) return this.globalData.userInfo

    const { code } = await wx.loginAsync()
    const { userInfo } = await wx.getUserInfoAsync()

    this.globalData.userInfo = userInfo
  },

  globalData: {
    userInfo: null,
    qiniuCDN: 'https://fireice.iblack7.com',
    serverUrl: 'https://iceandfire.iblack7.com'
  }
})