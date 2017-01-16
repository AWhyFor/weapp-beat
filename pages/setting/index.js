//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bpm: 96,
    notes: [
      {name: '1/2', value: '1/2'},
      {name: '1/4', value: '1/4'},
      {name: '2/2', value: '2/2'},
      {name: '2/4', value: '2/4'},
      {name: '2/3', value: '2/3'},
      {name: '2/5', value: '2/5'},
      {name: '3/4', value: '3/4'},
      {name: '3/8', value: '3/8'},
      {name: '3/16', value: '3/16'},
      {name: '4/4', value: '4/4'},
      {name: '4/8', value: '4/8'},
      {name: '5/4', value: '5/4'},
      {name: '5/8', value: '5/8'},
      {name: '6/4', value: '6/4'},
      {name: '6/8', value: '6/8'},
      {name: '7/4', value: '7/4'},
      {name: '7/8', value: '7/8'},
      {name: '9/8', value: '9/8'},
      {name: '11/8', value: '11/8'},
      {name: '12/8', value: '12/8'},
      {name: '14/16', value: '14/16'}
    ],
    userInfo: {}
  },
  // bpm改变
  bpmchange: function(e) {
    this.setData({
      bpm: e.detail.value
    })

    wx.setStorage({
      key: 'bpm',
      data: e.detail.value
    })
  },
  // 拍号改变
  radioChange: function(e) {
    this.setData({
      note: e.detail.value
    })

    wx.setStorage({
      key: 'noteStr',
      data: e.detail.value
    })
  },
  onLoad: function () {
    console.log('onLoad setting')
  },
  onShow: function () {
    // 从存储取数据
    var note = wx.getStorageSync('noteStr') || '4/4';
    var notes = this.data.notes;
    for (var i = 0, len = notes.length; i < len; i++) {
      if (notes[i].value === note) {
        notes[i].checked = true
      } else {
        notes[i].checked = false
      }
    }
    this.setData({
      bpm: wx.getStorageSync('bpm') || 96,
      note: note,
      notes: notes
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  }
})
