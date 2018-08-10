<template lang='pug'>
#tile-grid(@mouseover='navReady' @mouseover.once='mobileNote')
  tile(v-for='tile in info' :details='tile' :class='tile.tag' :key='info.index' @hover='clickReady' @link='linkReady' @name='nameReady')
  .hidden
    router-link#past(to='/')
    router-link#next(to='/web')
</template>

<script>
import tile from '../components/Tile'
export default {
  components: {
    tile
  },
  metaInfo: {
      title: 'Branding',
    meta: [
        { name: 'description', content: 'Branding and Identity Projects' }
    ]
    },
  data() {
    return {
      info: [
        {project: 'music militia', thumb: '/assets/_thumbs/sprite-01.jpg', frames: 3, link: '/branding/musicmilitia', tag: 'music'},
        {project: 'kigi love', thumb: '/assets/_thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove', tag: 'kigi'},
        {project: 'slek hair', thumb: '/assets/_thumbs/sprite-03.jpg', frames: 3, link: '/branding/slekhair', tag: 'slek'},
        {project: 'learn & explore', thumb: '/assets/_thumbs/sprite-04.jpg', frames: 3, link: '/branding/learn&explore', tag: 'learn'},
        {project: 'zed girl', thumb: '/assets/_thumbs/sprite-05.jpg', frames: 3, link: '/branding/zedgirl', tag: 'zed'},
        {project: 'r n r', thumb: '/assets/_thumbs/sprite-06.jpg', frames: 4, link: '/branding/rnr', tag: 'rnr'}
    ]
    }
  },
  methods: {
    clickReady (value) {this.flag1 = value},
    linkReady (value) {this.flag2 = value},
    nameReady (value) {this.flag3 = value},
    navReady: function() {
      var tile = document.querySelector('.' + this.flag3 + ' ' + '.tile')
      var route = this.$router
      var flag1 = this.flag
      var flag2 = this.flag2

      setTimeout(() => {
        tile.onclick =  function()  {
          if(flag1 == 'true' && tile.classList.contains('play')){
            document.querySelector('.snackbar').classList.remove("show")
            route.push(flag2)
          }
        }
      }, 300)
    },
    mobileNote: function() {
      var MobileDetect = require('mobile-detect')
      var md = new MobileDetect(window.navigator.userAgent)
        if(md.mobile()) {
          document.querySelector('.snackbar').classList.add("show")
          setTimeout(() => {
            document.querySelector('.snackbar').classList.remove("show")
          },2500)
        }
    },
    active: function() {
      var svg1 = Snap('#select.branding')
      var dot1 = svg1.select('.dot.branding')
      dot1.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce)
      $('.link .dot.branding').css('opacity','1')
    }
  },
  mounted() {
  this.active()
  }
}
</script>

<style lang='stylus'>

</style>
