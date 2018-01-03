<template>
  	<div class="home_container">
      <div class="p1 flex-column-center" v-if="!preLoaded">
        <img src="../../images/ball.png" alt="" class="ball">
        <p class="progress t1">{{progress}}</p>
        <p class="desc t1">和GoPro一起猫眼看世界...</p>
      </div>
      <div class="flex-column-center p2" v-if="showPage2">
        <div class="dialog-bg" ref="showPage2">
          <p class="t2">欢迎进入GoPro探索世界</p>
          <p class="t3">移动手机查看世界探索地图 <br>与大家一起互动</p>
          <img class="btn-go" src="../../images/btn1.png" @click="showMap">
        </div>
      </div>
      <div class="p3 p4" v-show="showPage3" ref="showPage3">
        <img
        class="left"
        v-bind:class="{breathing: scrollDirection === 'left'}"
        v-bind:src="scrollDirection === 'left' ? require('../../images/arrow-left-green.png') : require('../../images/arrow-left.png')">
        <img
        class="right"
        v-bind:class="{breathing: scrollDirection === 'right'}"
        v-bind:src="scrollDirection === 'right' ? require('../../images/arrow-right-green.png') : require('../../images/arrow-right.png')">
        <div v-bind:class="{hide: !hideMapElement}" class="center h-center">
          <span class="text absolute-center">移动地图<br>探索精彩世界</span>
        </div>
        <div v-bind:class="{hide: hideMapElement}" class="line h-center"></div>
        <p v-bind:class="{hide: hideMapElement}" class="position-text">{{title}}</p>
        <div v-bind:class="{hide: hideMapElement}" class="small-map h-center" ref="smallMap">
          <div class="small-map-position" v-bind:style="{left: offsetLeft}"></div>
        </div>
        <div class="map-container" ref="mapContainer">
          <img class="map" src="../../images/bg.jpg" alt="">
          <div v-show="!hideMapElement" class="map-hot" v-for="(item,index) in hots" @click="tapHot" :key="index" :style={top:item.top,left:item.left} :ref="'hotPoint' + (index+1)">
            <img :ref="'mh' + (index+1)" :src="item.url" @click="openUpload(index)">
            <div class="sprite"></div>
          </div>
        </div>
      </div>

      <div class="bottom-dialog h-center" v-show="showPage3">
        <span>探索不止<br>你的人生够了吗？</span>
      </div>
      <upload></upload>
      <submit></submit>
      <upload-success></upload-success>
    </div>
</template>

<script>
import upload from '../components/upload'
import submit from '../components/submit'
import uploadSuccess from '../components/upload-success'
import service from '../../config/service.js'
export default {
  name: "home",
  created() {},
  components: {
    upload,
    submit,
    uploadSuccess
  },
  data() {
    return {
      arrowLeft: require('../../images/arrow-right.png'),
      arrowRight: require('../../images/arrow-right.png'),
      ticking: false,
      scrollDirection: undefined,
      preScrollX: 0,
      showDialog1: false,
      showPage2: false,
      showPage3: false,
      showPage4: false,
      hideMapElement: true,
      positionText: "E26°36’东京",
      selectedIdx: 0,
      loadedCount: 0,
      biggerIdx: undefined,
      offsetLeft: 0,
      urls: [
        require("../../images/bg.jpg"),
        require("../../images/bg1.jpg"),
        require("../../images/test.png"),
        require("../../images/mg.png"),
      ],
      preLoaded: false, // 预加载是否完成
      isMobile: true,
      hots: [
        {url: require("../../images/mg.png"), selected: false, text:"W 118°14 洛杉矶", top: (705 * window.innerHeight / 1309) + 'px', left: (400 * window.innerHeight / 1309) + 'px', name: '洛杉矶'},
        {url: require("../../images/mg.png"), selected: false, text: "W 74°0 纽约", top: (670 * window.innerHeight / 1309) + 'px', left: (627 * window.innerHeight / 1309) + 'px', name: '纽约'},
        {url: require("../../images/agt.png"), selected: false, text: "E 12°10 阿根廷", top: (1112 * window.innerHeight / 1309) + 'px', left: (667 * window.innerHeight / 1309) + 'px', name: '阿根廷'},
        {url: require("../../images/ld.png"), selected: false, text: "W 0° 7 伦敦", top: (573 * window.innerHeight / 1309) + 'px', left: (1025 * window.innerHeight / 1309) + 'px', name: '伦敦'},
        {url: require("../../images/rd.png"), selected: false, text: "E 18°03 瑞典", top: (465 * window.innerHeight / 1309) + 'px', left: (1114 * window.innerHeight / 1309) + 'px', name: '瑞典'},
        {url: require("../../images/ydl.png"), selected: false, text: "E 11°15 意大利", top: (660 * window.innerHeight / 1309) + 'px', left: (1108 * window.innerHeight / 1309) + 'px', name: '意大利'},
        {url: require("../../images/teq.png"), selected: false, text: "E 32°54 土耳其", top: (678 * window.innerHeight / 1309) + 'px', left: (1202 * window.innerHeight / 1309) + 'px', name: '土耳其'},
        {url: require("../../images/kny.png"), selected: false, text: "E 36°49 肯尼亚", top: (901 * window.innerHeight / 1309) + 'px', left: (1227 * window.innerHeight / 1309) + 'px', name: '肯尼亚'},
        {url: require("../../images/db.png"), selected: false, text: "E 55°18 阿拉伯联合酋长国", top: (768 * window.innerHeight / 1309) + 'px', left: (1327 * window.innerHeight / 1309) + 'px', name: '阿拉伯联合酋长国'},
        {url: require("../../images/pj.png"), selected: false, text: "E 98°20 普吉岛", top: (853 * window.innerHeight / 1309) + 'px', left: (1572 * window.innerHeight / 1309) + 'px', name: '普吉岛'},
        {url: require("../../images/zg.png"), selected: false, text: "E 104°21 中国", top: (734 * window.innerHeight / 1309) + 'px', left: (1609 * window.innerHeight / 1309) + 'px', name: '中国'},
        {url: require("../../images/bld.png"), selected: false, text: "E 115° 14'E 巴厘岛", top: (947 * window.innerHeight / 1309) + 'px', left: (1644 * window.innerHeight / 1309) + 'px', name: '巴厘岛'},
        {url: require("../../images/ct.png"), selected: false, text: "E 114°37 长滩", top: (826 * window.innerHeight / 1309) + 'px', left: (1699 * window.innerHeight / 1309) + 'px', name: '长滩'},
        {url: require("../../images/dj.png"), selected: false, text: "E 139°69 日本", top: (691 * window.innerHeight / 1309) + 'px', left: (1773 * window.innerHeight / 1309) + 'px', name: '日本'},
        {url: require("../../images/adly.png"), selected: false, text: "E 150°53 澳大利亚", top: (1029 * window.innerHeight / 1309) + 'px', left: (1839 * window.innerHeight / 1309) + 'px', name: '澳大利亚'}
      ],
      hotCities: [],
      title: ''
    }
  },
  computed: {
    progress () {
      let tmp = (this.loadedCount / this.urls.length)*100
      if (tmp === 100) {
        this.preLoaded = true
        this.showPage2 = true
        this.transition('showPage2')
      }
      return tmp + "%"
    }
  },
  methods: {
    tapHot () {
    },
    fn() {
      this.preLoaded = true
    },
    preload(urls, callback) {
      let images = []
      for(let i=0; i < urls.length; i++) {
        images[i] = new Image()
        images[i].src = urls[i]
        images[i].onload = callback
      }
    },
    updateProgress() {
      let that = this
      setTimeout(() =>{
        that.loadedCount += 1
      }, 1000)
    },
    showMap() {
      let that = this
      this.showPage2 = false
      this.showPage3 = true
      this.transition('showPage3')
      this.$refs.mapContainer.style.width = (2240 * window.innerHeight / 1309) + 'px'
      setTimeout(() => {
        that.hideMapElement = false
      }, 1000)
    },
    toBigger(index) {
      this.biggerIdx = index
    },
    handleScroll(event) {
      var that = this
      if (!that.ticking) {
        window.requestAnimationFrame(function() {
          let arr = []
          for( let i = 1; i<= 15; i++ ){
            let index = 'mh' + i
            if (that.$refs[index] && that.elementInViewport(that.$refs[index][0])) {
              arr.push(i)
            }
          }
          for( let j = 0; j< arr.length; j++ ){
            let a = 'hotPoint' + arr[j]
            that.$refs[a][0].classList.add('hot-transition')
          }
          that.title = arr.length === 0 ? '' : that.hots[arr[0]-1].text
          for( let i = 1; i<= 15; i++ ){
            let b = 'hotPoint' + i
            if(!arr.includes(i)){
              that.$refs[b][0].classList.remove('hot-transition')
            }
          }
          that.scrollDirection = window.scrollX > that.preScrollX ? 'right' : 'left'
          let w = (2240 * window.innerHeight / 1309) - (window.innerWidth )
          let a = 0.3/4.5
          that.offsetLeft = ((document.body.scrollLeft / w)-a)* 100
          if(that.offsetLeft < 0){
            that.offsetLeft = 0
          }
          that.offsetLeft = that.offsetLeft +'%'
          that.ticking = false
        })
      }
      that.ticking = true
    },
    elementInViewport(el) {
      let rect = el.getBoundingClientRect()
      return  Math.abs(window.innerWidth/2 - rect.left) <= el.width/2
    },
    async getHotCities() {
      let res = await service.getHotCities()
      this.hotCities = res.data
    },
    openUpload (index) {
      let a = 'hotPoint' + (index +1)
      if (this.$refs[a][0].className.includes('hot-transition')) {
        this.$store.commit('SET_VISIBLE_UPLOAD', true)
        let b = this.hotCities.findIndex((item) => item.name === this.hots[index].name)
        this.$store.commit('SET_CURRENT_AREA', {id: parseInt(this.hotCities[b].id), name: this.hotCities[b].name})
      }
    },
    transition (ele) {
      this.$nextTick(()=>{
        this.$refs[ele].style.opacity = 0
        this.$refs[ele].style.transition = 'all 0s'
        setTimeout(()=> {
          this.$refs[ele].style.opacity = 1
          this.$refs[ele].style.transition = 'all 1.5s'
        },0)
      })
    }
  },
  mounted () {
    this.getHotCities()
    this.preload(this.urls, this.updateProgress)
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
.hide {
  visibility: hidden;
}

.bigger {
  transform: scale(4);
  transform-origin: bottom;
  transition: all .5s;
}

#app, #app > div, .home_container {
  width: 100vw;
  height: 100vh;
}

.p1, .p2, .p3, .p4 {
  height: 100%;
  width: 100%;
}

.p1, .p2 {
  background-image: url(../../images/bg1.jpg);
  background-size: 100% 100%;
}

.p1 .t1 {
  margin-top: 0.1rem;
}

.p1 .desc {
  margin-bottom: 0.2rem;
}

.ball {
  width: 1.2rem;
  height: 1.2rem;
}

.t1 {
  font-size: 0.28rem;
  color: #fff;
}

.t2 {
  font-size: 0.38rem;
  color: #00ccff;
}

.t3 {
  font-size: 0.28rem;
  color: #999;
}

.p2 .dialog-bg {
  background: url(../../images/dialog1.png) no-repeat;
  background-size: contain;
  width: 6.24rem;
  height: 3.88rem;
  text-align: center;
  background-color: #fff;
}

.p2 .t2 {
  margin-top: 0.5rem;
}

.p2 .t3 {
  margin-top: 0.2rem;
}

.p2 .btn-go {
  margin-top: 0.4rem;
}

.btn-go {
  width: 5.23rem;
  height: 1rem;
}

.p3 .left, .p3 .right {
  position: fixed;
  top: 6rem;
  width: 1.12rem;
  height: 1.7rem;
  z-index: 1;
}

.p3 .left {
  left: 0.8rem;
}

.p3 .right {
  right: 0.8rem;
}

.p3 .center {
  background: url("../../images/dialog-3.png") no-repeat;
  background-size: contain;
  width: 3rem;
  height: 2.53rem;
  top: 5.5rem;
  z-index: 2;
}

.p3 .text {
  font-size: 0.34rem;
  color: #333;
}

.bottom-dialog {
  width: 6.15rem;
  height: 2.57rem;
  position: fixed;
  bottom: 0.3rem;
  background: url("../../images/dialog.png") 100% 100% no-repeat;
  background-size: contain;
  font-size: 0.56rem;
  z-index: 2;

  > span {
    display: block;
    text-align: center;
    padding-top: .8rem;
  }
}

.p3 span.absolute-center {
  width: 100%;
  text-align: center;
  font-family: 'TextPro-Bold';
}

.p4 .map {
  height: 100%;
  width:100%;
}

.map-container {
  position: relative;
  height:100%;
  //overflow-y: hidden;
}

[class|="map-hot"] {
  position: absolute;
  width: .52rem;
  height: .62rem;
  transform: translate(-50%,-100%);
  transition: all 1s;
  font-size: 0;
  z-index: 3;
}
.map-hot.hot-transition{
  position: absolute;
  width: 1.04rem;
  height: 1.24rem;
  transform: translate(-50%,-100%);
  transition: all 1s;
  font-size: 0;
  z-index: 3;
}
[class|="map-hot"] > img, .hot-transition>img {
  width: 100%;
  height: 100%;
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8;
  }


  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: .8;
  }

  100% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.breathing {
  animation: breathing 2s ease-out normal;
}

@tops: 5.36rem, 5.06rem, 8.7rem, 4.09rem, 2.5rem, 4.95rem, 5.11rem, 7.3rem,
  6.05rem, 6.85rem, 5.63rem, 7.79rem, 6.52rem, 5.23rem, 8.68rem;

@lefts: 3.69rem, 5.97rem, 6.6rem, 9.92rem, 11.1rem, 10.79rem, 11.73rem, 11.98rem,
  12.98rem, 15.4rem, 15.87rem, 16.08rem, 16.61rem, 17.39rem, 18.12rem;
.loop(@n) when (@n < 16) {
  @mp-top: extract(@tops, @n);
  @mp-left: extract(@lefts, @n);
  .map-hot-@{n} {
    top: @mp-top;
    left: @mp-left;
    // animation: breathing 2s ease-out infinite normal;
  }
  //循环调用自身
  .loop((@n + 1));
}

.loop(1);

.line {
  width: 2px;
  height: 10rem;
  position: fixed;
  z-index: 1;
  top: .68rem;
  background: #91a6bb;
}

.small-map {
  width: 4.50rem;
  height: 0.64rem;
  z-index: 1;
  position: fixed;
  top: 0.68rem;
  background: url('../../images/small-map.png') no-repeat;
  background-size: 100% 100%;
}

.position-text {
  position: fixed;
  z-index: 1;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  width: 100%;
  margin-top: .2rem;
  margin-bottom: .1rem;
}

.small-map-position {
  height: 100%;
  width: .3rem;
  z-index: 2;
  opacity: .5;
  background: #fff;
  position: absolute;
  top: 0;
  left: 20%;
}

@spriteWidth: 40px; // 精灵宽度
@keyframes run {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -(@spriteWidth * 15) 0;
  }
}
.sprite {
  width: @spriteWidth;
  height: 20px;
  background: url("../../images/sprite.png") 0 0 no-repeat;
  animation: run 1.2s steps(15) infinite;
  background-size: cover;
  z-index: 1;
  position: absolute;
  bottom: 10%;
  left:50%;
  transition: all 1s;
  transform: translate(-50%,100%);
}

.sprite-bigger {
  animation: run 1s steps(15);
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  transform: scale(4)
}

// .sprite-bigger {
//   width: .6rem;
//   height: .22rem;
//   z-index: 2;
//   bottom: -4.7vw;
//   position: absolute;
//   background: url("../../images/water.png") 0 0 no-repeat;
//   background-size: contain;
// }

</style>
