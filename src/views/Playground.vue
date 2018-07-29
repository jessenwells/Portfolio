<template lang="pug">
#tile-grid(@mouseover="ready")
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index" @hover="clickReady" @link="linkReady" @name="nameReady")
</template>

<script>
import tile from '../components/Tile';
export default {
  components: {
    tile
  },
  data() {
    return {
      info: [
        {project: 'svg melt', thumb: '/thumbs/sprite-21.jpg', frames: '6', link: '/playground/svgmelt'},
        {project: '3d parallax', thumb: '/thumbs/sprite-22.jpg', frames: 6, link: '/playground/3dparallax'},
        {project: 'svg draw path', thumb: '/thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath'},
        {project: 'svg morph', thumb: '/thumbs/sprite-24.jpg', frames: 6, link: '/playground/svgmorph'},
        {project: 'css draw path', thumb: '/thumbs/sprite-25.jpg', frames: 6, link: '/playground/cssdrawpath'},
        {project: 'sass color mixin', thumb: '/thumbs/sprite-26.jpg', frames: 6, link: '/playground/sasscolor'}
    ]
    };
  },
  methods: {
    clickReady (value) {this.flag = value},
    linkReady (value) {this.flag2 = value},
    nameReady (value) {this.flag3 = value},
    ready: function() {
      var tile = document.querySelector(this.join)
      var route = this.$router
      var flag = this.flag
      var flag2 = this.flag2
      setTimeout(() => {
        tile.onclick =  function()  {
          if(flag == 'true' && tile.classList.contains('play')){
            route.push(flag2)
          }
        }
      }, 300)
    },
    active: function() {
    var svg4 = Snap('#select.playground')
    var dot4 = svg4.select('.dot.playground')
    dot4.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
    $('.link .dot.playground').css('opacity','1');
    }
  },
  mounted() {
this.active()
  },
  computed: {
    join: function() {
      var flag3 = this.flag3
      return '.' + this.flag3.replace(/[0-9]/g, '').split(' ').join('.') + ' ' + '.tile'
    }
  }
}
</script>

<style lang="stylus">
</style>
