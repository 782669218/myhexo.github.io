const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "说谎",
        artist: '林宥嘉',
        url: 'http://www.ytmp3.cn/down/37226.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20160907/20160907193456848119.jpg',
      },
      {
        name: '可不可以',
        artist: '张紫豪',
        url: 'http://www.ytmp3.cn/down/50987.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20180827/20180827203224857639.jpg',
      },
      {
        name: '后来',
        artist: '刘若英',
        url: 'http://www.ytmp3.cn/down/48101.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20150720/20150720215200170554.jpg',
      }
    ]
});