import regeneratorRuntime from 'regenerator-runtime'
global.regeneratorRuntime = regeneratorRuntime

import _ from 'lodash'
global._ = _

import R from 'ramda'
global.R = R

const asyncWrap = fn => (options = {}) => new Promise((resolve, reject) => {
  let conf = {
    success: res => {
      resolve(res)
    },
    fail: err => {
      reject(err)
    }
  }

  wx[fn](R.merge(conf, options))
})

wx.loginAsync = asyncWrap('login')
wx.getUserInfoAsync = asyncWrap('getUserInfo')
wx.reqAsync = asyncWrap('request')
wx.getSystemInfoAsync = asyncWrap('getSystemInfo')
wx.payAsync = asyncWrap('requestPayment')

let lastTime = 0

global.requestAnimationFrame = callback => {
  const currentTime = new Date().getTime()
  const timeToCall = Math.max(0, 16 - (currentTime - lastTime))
  const timer = global.setTimeout(function () {
    callback(currentTime + timeToCall)
  }, timeToCall)

  lastTime = currentTime + timeToCall

  return timer
}

global.cancelAnimationFrame = timer => {
  clearTimeout(timer)
}

import TWEEN from 'tween.js'


TWEEN.now = function () {
  return new Date().getTime()
}


global.TWEEN = TWEEN