<template lang="pug">
#tile-grid.home(@mouseover="navReady" @mouseover.once="mobileNote")
  tile(v-for="tile in info" :details="tile" :class="tile.tag" :key="info.index" @hover="clickReady" @link="linkReady" @name="nameReady")
</template>

<script>
import tile from '../components/Tile'
import prefetchImages from 'prefetch-image'
export default {
  components: {
    tile
  },
  metaInfo: {
      title: 'Portfolio'
    },
  data() {
    return {
      info: [
        {project: 'salon & store', thumb: '/assets/_thumbs/sprite-07.jpg', frames: 3, link: '/web/slek', tag: 'salon'},
        {project: 'kigilove identity', thumb: '/assets/_thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove', tag: 'love'},
        {project: 'nyc tourism', thumb: '/assets/_thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline', tag: 'nyc'},
        {project: 'intel dashboard', thumb: '/assets/_thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard', tag: 'intel'},
        {project: 'svg animation', thumb: '/assets/_thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath', tag: 'anim'},
        {project: 'apparel graphic', thumb: '/assets/_thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown', tag: 'apparel'},
        {project: 'business & blog', thumb: '/assets/_thumbs/sprite-09.jpg', frames: 3, link: '/web/kisstofly', tag: 'blog'},
        {project: 'svg melt', thumb: '/assets/_thumbs/sprite-21.jpg', frames: '6', link: '/playground/svgmelt', tag: 'melt'},
        {project: 'music militia', thumb: '/assets/_thumbs/sprite-01.jpg', frames: 3, link: '/branding/musicmilitia', tag: 'music'},
        {project: 'nyc text map', thumb: '/assets/_thumbs/sprite-17.jpg', frames: 4, link: '/apparel/nycmap', tag: 'map'},
        {project: 'user dashboard', thumb: '/assets/_thumbs/sprite-10.jpg', frames: 3, link: '/web/itsapostcard', tag: 'user'},
        {project: '3d parallax', thumb: '/assets/_thumbs/sprite-22.jpg', frames: 6, link: '/playground/3dparallax', tag: 'para'},
        {project: 'r n r', thumb: '/assets/_thumbs/sprite-06.jpg', frames: 4, link: '/branding/rnr', tag: 'rnr'},
        {project: 'moody line art', thumb: '/assets/_thumbs/sprite-19.jpg', frames: 5, link: '/apparel/moody', tag: 'moody'},
        {project: 'app launch site', thumb: '/assets/_thumbs/sprite-13.jpg', frames: 3, link: '/web/adwap', tag: 'launch'},
        {project: 'svg morph', thumb: '/assets/_thumbs/sprite-24.jpg', frames: 6, link: '/playground/svgmorph', tag: 'morph'},
        {project: 'zed girl', thumb: '/assets/_thumbs/sprite-05.jpg', frames: 3, link: '/branding/zedgirl', tag: 'zed'},
        {project: 'distress pyramid', thumb: '/assets/_thumbs/sprite-18.jpg', frames: 5, link: '/apparel/pyramid', tag: 'pyramid'},
        {project: 'lifestyle store', thumb: '/assets/_thumbs/sprite-11.jpg', frames: 3, link: '/web/kigilife', tag: 'life'},
        {project: 'css draw path', thumb: '/assets/_thumbs/sprite-25.jpg', frames: 6, link: '/playground/cssdrawpath', tag: 'css'},
        {project: 'nyc liberty', thumb: '/assets/_thumbs/sprite-20.jpg', frames: 4, link: '/apparel/nycliberty', tag: 'liberty'},
        {project: 'admin dashboard', thumb: '/assets/_thumbs/sprite-12.jpg', frames: 3, link: '/web/energydashboard', tag: 'admin2'},
        {project: 'learn & explore', thumb: '/assets/_thumbs/sprite-04.jpg', frames: 3, link: '/branding/learn&explore', tag: 'learn'},
        {project: 'admin dashboard', thumb: '/assets/_thumbs/sprite-14.jpg', frames: 3, link: '/web/veteranlite', tag: 'admin3'}
    ]
    };
  },
  methods: {
    clickReady (value) {this.flag = value},
    linkReady (value) {this.flag2 = value},
    nameReady (value) {this.flag3 = value},
    navReady: function() {
      var tile = document.querySelector('.' + this.flag3 + ' ' + '.tile')
      var route = this.$router
      var flag = this.flag
      var flag2 = this.flag2

      setTimeout(() => {
        tile.onclick =  function()  {
          if(flag == 'true' && tile.classList.contains('play')){
            document.querySelector('.snackbar').classList.remove("show")
            route.push(flag2)
          }
        }
      }, 300)
    },
    mobileNote: function() {
      var MobileDetect = require('mobile-detect')
      var md = new MobileDetect(window.navigator.userAgent);
        if(md.mobile()) {
          console.log('snackbar!')
          document.querySelector('.snackbar').classList.add("show")
          setTimeout(() => {
            document.querySelector('.snackbar').classList.remove("show")
          },2500)
        }
    }
  },
  mounted() {
    const thumbs = [ "/assets/_thumbs/sprite-07.jpg","/assets/_thumbs/sprite-02.jpg","/assets/_thumbs/sprite-15.jpg","/assets/_thumbs/sprite-08.jpg","/assets/_thumbs/sprite-23.jpg","/assets/_thumbs/sprite-16.jpg","/assets/_thumbs/sprite-01.jpg","/assets/_thumbs/sprite-02.jpg","/assets/_thumbs/sprite-03.jpg","/assets/_thumbs/sprite-04.jpg","/assets/_thumbs/sprite-05.jpg","/assets/_thumbs/sprite-06.jpg","/assets/_thumbs/sprite-07.jpg","/assets/_thumbs/sprite-08.jpg","/assets/_thumbs/sprite-09.jpg","/assets/_thumbs/sprite-10.jpg","/assets/_thumbs/sprite-11.jpg","/assets/_thumbs/sprite-12.jpg","/assets/_thumbs/sprite-13.jpg","/assets/_thumbs/sprite-14.jpg","/assets/_thumbs/sprite-15.jpg","/assets/_thumbs/sprite-16.jpg","/assets/_thumbs/sprite-17.jpg","/assets/_thumbs/sprite-18.jpg","/assets/_thumbs/sprite-19.jpg","/assets/_thumbs/sprite-20.jpg","/assets/_thumbs/sprite-21.jpg","/assets/_thumbs/sprite-22.jpg","/assets/_thumbs/sprite-23.jpg","/assets/_thumbs/sprite-24.jpg","/assets/_thumbs/sprite-25.jpg","/assets/_thumbs/sprite-26.jpg"
    ]
    prefetchImages(thumbs)
  }
  }
</script>

<style lang="stylus">
#tile-grid.home
  max-width 1600px
</style>
