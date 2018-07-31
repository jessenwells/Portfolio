<template lang="pug">
#tile-grid.home(@mouseover="ready")
  tile(v-for="tile in info" :details="tile" :class="tile.tag" :key="info.index" @hover="clickReady" @link="linkReady" @name="nameReady")
</template>

<script>
import tile from '../components/Tile'
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
        {project: 'salon & store', thumb: '/assets/thumbs/sprite-07.jpg', frames: 3, link: '/web/slek', tag: 'salon'},
        {project: 'kigilove identity', thumb: '/assets/thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove', tag: 'love'},
        {project: 'nyc tourism', thumb: '/assets/thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline', tag: 'nyc'},
        {project: 'intel dashboard', thumb: '/assets/thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard', tag: 'intel'},
        {project: 'svg animation', thumb: '/assets/thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath', tag: 'anim'},
        {project: 'apparel graphic', thumb: '/assets/thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown', tag: 'apparel'}
    ],
    };
  },
  methods: {
    clickReady (value) {this.flag = value},
    linkReady (value) {this.flag2 = value},
    nameReady (value) {this.flag3 = value},
    ready: function() {
      var tile = document.querySelector('.' + this.flag3 + ' ' + '.tile')
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
    }
  }
}
</script>

<style lang="stylus">

</style>
