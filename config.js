const { resolve } = require('path')
const r = url => resolve(__dirname, url)
const assetsPath = resolve(process.cwd(), './mina')

module.exports = {
  "json": {
    "pages":[
      "pages/index/index",
      "pages/logs/logs"
    ],
    "tabBar": {
      "selectedColor": "#5aaca5",
      "color": "#565656",
      "list": [
        {
          "iconPath": "static/home.png",
          "selectedIconPath": "static/home-selected.png",
          "pagePath": "page/index/index",
          "text": "家族脸谱"
        },
        {
          "iconPath": "static/user.png",
          "selectedIconPath": "static/user-selected.png",
          "pagePath": "page/logs/logs",
          "text": "我的账户"
        }
      ]
    }
  },
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "权利的游戏",
    "navigationBarTextStyle":"black"
  },
  "assetsPath": assetsPath,
  "app": r('./app.js')
}