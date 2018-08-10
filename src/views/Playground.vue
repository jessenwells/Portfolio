<template lang='pug'>
#tile-grid(@mouseover='navReady' @mouseover.once='mobileNote')
  tile(v-for='tile in info' :details='tile' :class='tile.tag' :key='info.index' @hover='clickReady' @link='linkReady' @name='nameReady')
  .hidden
    router-link#past(to='/apparel')
    router-link#next(to='/')
</template>

<script>
import tile from '../components/Tile'
export default {
  components: {
    tile
  },
  metaInfo: {
      title: 'Playground',
    meta: [
        { name: 'description', content: 'Experimental Web Technology Projects' }
    ]
    },
  data() {
    return {
      info: [
        {project: 'svg melt', thumb: '/assets/_thumbs/sprite-21.jpg', frames: '6', link: '/playground/svgmelt', tag: 'melt'},
        {project: '3d parallax', thumb: '/assets/_thumbs/sprite-22.jpg', frames: 6, link: '/playground/3dparallax', tag: 'para'},
        {project: 'svg draw path', thumb: '/assets/_thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath', tag: 'svg'},
        {project: 'svg morph', thumb: '/assets/_thumbs/sprite-24.jpg', frames: 6, link: '/playground/svgmorph', tag: 'morph'},
        {project: 'css draw path', thumb: '/assets/_thumbs/sprite-25.jpg', frames: 6, link: '/playground/cssdrawpath', tag: 'css'},
        {project: 'sass color mixin', thumb: '/assets/_thumbs/sprite-26.jpg', frames: 6, link: '/playground/sasscolor', tag: 'sass'}
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
            document.querySelector('.snackbar').classList.remove('show')
            route.push(flag2)
          }
        }
      }, 300)
    },
    mobileNote: function() {
      var MobileDetect = require('mobile-detect')
      var md = new MobileDetect(window.navigator.userAgent)
        if(md.mobile()) {
          console.log('snackbar!')
          document.querySelector('.snackbar').classList.add('show')
          setTimeout(() => {
            document.querySelector('.snackbar').classList.remove('show')
          },2500)
        }
    },
    active: function() {
      var svg4 = Snap('#select.playground')
      var dot4 = svg4.select('.dot.playground')
      dot4.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce)
      $('.link .dot.playground').css('opacity','1')
    }
  },
  mounted() {
  this.active()
  }
}
</script>

<style lang='stylus'>
</style>
