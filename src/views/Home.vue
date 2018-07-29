<template lang="pug">
#tile-grid.home(@mouseover="ready")
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
        {project: 'salon & store', thumb: '/thumbs/sprite-07.jpg', frames: 3, link: '/web/slek'},
        {project: 'kigilove identity', thumb: '/thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove'},
        {project: 'nyc tourism', thumb: '/thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline'},
        {project: 'intel dashboard', thumb: '/thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard'},
        {project: 'svg animation', thumb: '/thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath'},
        {project: 'apparel graphic', thumb: '/thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown'}
    ],
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
    }
  },
  computed: {
    join: function() {
      var flag3 = this.flag3
      return '.' + this.flag3.replace(/ &/g,'').split(' ').join('.') + ' ' + '.tile'
    }
  }
}
</script>

<style lang="stylus">

</style>
