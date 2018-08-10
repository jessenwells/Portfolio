<template lang='pug'>
  #tile-grid(@mouseover='navReady' @mouseover.once='mobileNote')
    tile(v-for='tile in info' :details='tile' :class='tile.tag' :key='info.index' @hover='clickReady' @link='linkReady' @name='nameReady')
    .hidden
      router-link#past(to='/web')
      router-link#next(to='/playground')
</template>

<script>
import tile from '../components/Tile'
export default {
  components: {
    tile
  },
  metaInfo: {
      title: 'Apparel',
    meta: [
        { name: 'description', content: 'Apparel Graphic Projects' }
    ]
    },
  data() {
    return {
      info: [
        {project: 'nyc skyline', thumb: '/assets/_thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline', tag: 'sky'},
        {project: 'relief crown', thumb: '/assets/_thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown', tag: 'crown'},
        {project: 'nyc text map', thumb: '/assets/_thumbs/sprite-17.jpg', frames: 4, link: '/apparel/nycmap', tag: 'map'},
        {project: 'distress pyramid', thumb: '/assets/_thumbs/sprite-18.jpg', frames: 5, link: '/apparel/pyramid', tag: 'pyramid'},
        {project: 'moody line art', thumb: '/assets/_thumbs/sprite-19.jpg', frames: 5, link: '/apparel/moody', tag: 'moody'},
        {project: 'nyc liberty', thumb: '/assets/_thumbs/sprite-20.jpg', frames: 4, link: '/apparel/nycliberty', tag: 'liberty'}
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
      var svg3 = Snap('#select.apparel')
      var dot3 = svg3.select('.dot.apparel')
      dot3.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce)
      $('.link .dot.apparel').css('opacity','1')
    }
  },
  mounted() {
  this.active()
  }
}
</script>

<style lang='stylus'>
.hidden
  display none
</style>
