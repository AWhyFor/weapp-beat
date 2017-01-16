//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bpm: 96,
    showDetail: true,
    // TODO: 动态根据detailNotes生成notes
    notes: [
      '1/2',
      '1/4',
      '2/2',
      '2/4',
      '2/3',
      '2/5',
      '3/4',
      '3/8',
      '3/16',
      '4/4',
      '4/8',
      '5/4',
      '5/8',
      '6/4',
      '6/8',
      '7/4',
      '7/8',
      '9/8',
      '11/8',
      '12/8',
      '14/16'
    ],
    detailNotes: [{
      name: '戏曲',
      lists: [
        '1/2',
        '1/4'
      ]
    }, {
      name: '颂歌 进行曲',
      lists: [
        '2/2',
        '2/3',
        '2/5'
      ]
    }, {
      name: '圆舞曲',
      lists: [
        '3/4',
        '3/8',
        '3/16',
        '6/4'
      ]
    }, {
      name: '流行音乐',
      lists: [
        '2/4',
        '4/4',
        '4/8',
        '6/8'
      ]
    }, {
      name: '常用混拍',
      lists: [
        '5/4',
        '5/8',
        '7/4',
        '7/8',
        '9/8'
      ]
    }, {
      name: '迷之高端拍子',
      lists: [
        '11/8',
        '12/8',
        '14/16'
      ]
    }],
    anm: 1,
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
  // 拍号是否展示详情
  detailChange: function(e) {
    this.setData({
      showDetail: e.detail.value
    })
  },
  // 指针动画改变
  anmChange: function(e) {
    var val = parseInt(e.detail.value);

    this.setData({
      anm: val
    })

    wx.setStorage({
      key: 'anm',
      data: val
    })
  },
  onLoad: function () {
    console.log('onLoad setting')
  },
  onShow: function () {
    // 从存储取数据
    var note = wx.getStorageSync('noteStr') || '4/4';
    var anm = wx.getStorageSync('anm') || 0;
    var notes = this.data.notes;

    this.setData({
      bpm: wx.getStorageSync('bpm') || 96,
      note: note,
      notes: notes,
      anm: anm
    })
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  }
})
