<template>
  	<div class="home_container">
      <div class="p1 flex-column-center" v-if="!preLoaded">
        <img src="../../images/ball.png" alt="" class="ball">
        <p class="progress t1">{{progress}}</p>
        <p class="desc t1">和GoPro一起猫眼看世界...</p>
      </div>
      <div class="flex-column-center p2" v-if="showPage2">
        <div class="dialog-bg">
          <p class="t2">欢迎进入GoPro探索世界</p>
          <p class="t3">移动手机查看世界探索地图 <br>与大家一起互动</p>
          <img class="btn-go" src="../../images/btn1.png" @click="showMap">
        </div>
      </div>
      <div class="p3 p4" v-show="showPage3">
        <img
        class="left"
        v-bind:class="{hide: hideMapElement, breathing: scrollDirection === 'left'}"
        v-bind:src="scrollDirection === 'left' ? require('../../images/arrow-left-green.png') : require('../../images/arrow-left.png')">
        <img
        class="right"
        v-bind:class="{hide: hideMapElement, breathing: scrollDirection === 'right'}"
        v-bind:src="scrollDirection === 'right' ? require('../../images/arrow-right-green.png') : require('../../images/arrow-right.png')">
        <div v-bind:class="{hide: !hideMapElement}" class="center h-center">
          <span class="text absolute-center">移动地图<br>探索精彩世界</span>
        </div>
        <div v-bind:class="{hide: hideMapElement}" class="line h-center"></div>
        <p v-bind:class="{hide: hideMapElement}" class="position-text">{{biggerIdx && hots[biggerIdx-1].text}}</p>
        <div v-bind:class="{hide: hideMapElement}" class="small-map h-center" ref="smallMap">
          <div class="small-map-position" v-bind:style="{left: offsetLeft+'%'}"></div>
        </div>
        <div class="map-container" ref="mapContainer">
          <img class="map" src="../../images/bg.jpg" alt="">
          <div v-show="!hideMapElement" :class="'map-hot-' + (index+1)" v-for="(item,index) in hots" @click="tapHot" :key="index">
            <img v-bind:data-idx="index+1" :ref="'mh' + (index+1)" v-bind:class="{bigger: biggerIdx == (index+1)}" :src="item.url" @click="openUpload(biggerIdx == (index+1))">
            <!-- <div class="sprite" v-bind:class="{'sprite-bigger': biggerIdx == (index+1)}"></div> -->
            <div class="sprite"></div>
            <!-- <div v-show="biggerIdx != (index+1)" class="sprite"></div> -->
            <!-- <div v-show="biggerIdx == (index+1)" class="sprite-bigger"></div> -->
          </div>
          <!-- <img :class="'map-hot-' + (index+1)" :src="img" alt="" v-for="(img,index) in hots" @click="tapHot"> -->
        </div>
      </div>

      <div v-bind:class="{hide: hideMapElement}" class="bottom-dialog h-center" v-show="showPage3">
        <span class="absolute-center">探索不止 <br> #猫眼看世界#</span>
      </div>
      <upload></upload>
    </div>
</template>

<script>
import upload from '../components/upload'
import service from '../../config/service.js'
export default {
  name: "home",
  created() {},
  components: {
   upload
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
      offsetLeft: 13,
      urls: [
        require("../../images/bg.jpg"),
        require("../../images/bg1.jpg"),
        require("../../images/test.png"),
        require("../../images/mg.png"),
      ],
      preLoaded: false, // 预加载是否完成
      isMobile: true,
      hots: [
        {url: require("../../images/mg.png"), selected: false, text:"W 118°14 洛杉矶", id: 5},
        {url: require("../../images/mg.png"), selected: false, text: "W 74°0 纽约", id: 6},
        {url: require("../../images/agt.png"), selected: false, text: "E 12°10 阿根廷", id:4},
        {url: require("../../images/ld.png"), selected: false, text: "W 0° 7 伦敦", id:14},
        {url: require("../../images/rd.png"), selected: false, text: "E 18°03 瑞典", id:13},
        {url: require("../../images/ydl.png"), selected: false, text: "E 11°15 意大利", id:8},
        {url: require("../../images/teq.png"), selected: false, text: "E 32°54 土耳其", id:7},
        {url: require("../../images/kny.png"), selected: false, text: "E 36°49 肯尼亚", id:2},
        {url: require("../../images/db.png"), selected: false, text: "E 55°18 阿拉伯联合酋长国", id:3},
        {url: require("../../images/pj.png"), selected: false, text: "E 98°20 普吉岛", id:10},
        {url: require("../../images/zg.png"), selected: false, text: "E 104°21 中国", id:11},
        {url: require("../../images/bld.png"), selected: false, text: "E 115° 14'E 巴厘岛", id:9},
        {url: require("../../images/ct.png"), selected: false, text: "E 114°37 长滩", id:15},
        {url: require("../../images/dj.png"), selected: false, text: "E 139°69 日本", id:12},
        {url: require("../../images/adly.png"), selected: false, text: "E 150°53 澳大利亚", id:1}
      ]
    }
  },
  computed: {
    progress () {
      let tmp = (this.loadedCount / this.urls.length)*100
      if (tmp === 100) {
        this.preLoaded = true
        this.showPage2 = true
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
        console.log('updateProgress')
      }, 1000)
    },
    showMap() {
      let that = this
      this.showPage2 = false
      this.showPage3 = true
      setTimeout(() => {
        that.hideMapElement = false
      }, 1000)
    },
    toBigger(index) {
      this.biggerIdx = index
      // console.log('index->', this.biggerIdx)
    },
    handleScroll(event) {
      var that = this
      if (!that.ticking) {
        window.requestAnimationFrame(function() {
          for (let ref in that.$refs) {
            var el = that.$refs[ref][0]
            if (el && that.biggerIdx != el.dataset.idx && that.elementInViewport(el)) {
              that.biggerIdx = el.dataset.idx
              console.log('happy!', that.biggerIdx)
            }
          }
          that.scrollDirection = window.scrollX > that.preScrollX ? 'right' : 'left'
          let elContainer = document.documentElement
          let initProgress = 15
          // let elSmallMap = that.$refs.smallMap
          // let ratio = elContainer.scrollWidth/elSmallMap.clientWidth
          that.offsetLeft = initProgress + (elContainer.scrollLeft/elContainer.scrollWidth*100)
          that.ticking = false
        })
      }
      that.ticking = true
    },
    elementInViewport(el) {
      var rect = el.getBoundingClientRect()
      return  Math.abs(window.innerWidth/2 - rect.left) <= el.width/4
    },
    async getHotCities() {
      var res = await service.getHotCities()
      // this.hotCities = res.data
    },
    openUpload (isBigger) {
      if (isBigger) {
        this.$store.commit('SET_VISIBLE_UPLOAD', true)
      }
    }
  },
  mounted () {
    this.hots = this.hots
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

#app,
#app > div,
.home_container {
  width: 100vw;
  height: 100vh;
}

.p1,
.p2,
.p3,
.p4 {
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

.p3 .left,
.p3 .right {
  position: fixed;
  top: 6rem;
  width: 1.12rem;
  height: 1.7rem;
  z-index: 1;
}

.p3 .left {
  left: 0.8rem;
  // transform: rotate(180deg);
}

.p3 .right {
  right: 0.8rem;
}


.p3 .right.breathing {
  // transform: rotate(180deg);
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
  width: 6.26rem;
  height: 2.15rem;
  position: fixed;
  bottom: 0.3rem;
  background: url("../../images/bottom-dialog.png") 100% 100% no-repeat;
  background-size: contain;
  font-size: 0.56rem;
  z-index: 2;

  > span {
    width: 100%;
    text-align: center;
  }
}

.p3 span.absolute-center {
  width: 100%;
  text-align: center;
}

// .p4 {
//   overflow: scroll;
//   box-sizing: border-box;
// }

.p4 .map {
  // height: 100%;
  width: 22.40rem;
}

.map-container {
  position: relative;
}

[class|="map-hot"] {
  position: absolute;
  // width: 0.53rem;
  // height: 0.65rem;
  // background-image: url('../../images/position-box.png');
  // background-size: contain;
  // background-repeat: no-repeat;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  -webkit-justify-content: center;
  // transition: 1s transform ease-in;
  z-index: 3;
}

// [class|="map-hot"].bigger{
//   width: 2.33rem;
//   height: 3.24rem;
// }

[class|="map-hot"] > img {
  width: 0.5rem;
  height: 0.6rem;
  z-index: 2;
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

  100% {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: .8;
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
  // border: 1px solid #91a6bb;
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
  background-image: url('../../images/small-map.png');
  background-size: contain;
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

// @spriteWidth: 10vw; // 精灵宽度
@spriteWidth: 40px; // 精灵宽度
// @spriteWidth: 40px; // 精灵宽度
@keyframes run {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -(@spriteWidth * 15) 0; // 15帧
  }
}
.sprite {
  width: @spriteWidth;
  // height: 5vw;
  // height: 2.6vw;
  height: 20px;
  background: url("../../images/sprite.png") 0 0 no-repeat;
  animation: run 1.2s steps(15) infinite;
  background-size: cover;
  z-index: 1;
  width: @spriteWidth;
  position: absolute;
  bottom: -4.75vw;
  // bottom: -15px;
  transition: all 1s;
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
