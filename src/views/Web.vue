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
        {project: 'salon & store', thumb: '/thumbs/sprite-07.jpg', frames: 3, link: '/web/slek'},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard'},
        {project: 'business & blog', thumb: '/thumbs/sprite-09.jpg', frames: 3, link: '/web/kisstofly'},
        {project: 'user dashboard', thumb: '/thumbs/sprite-10.jpg', frames: 3, link: '/web/itsapostcard'},
        {project: 'lifestyle store', thumb: '/thumbs/sprite-11.jpg', frames: 3, link: '/web/kigilife'},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-12.jpg', frames: 3, link: '/web/energydashboard'},
        {project: 'app launch site', thumb: '/thumbs/sprite-13.jpg', frames: 3, link: '/web/adwap'},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-14.jpg', frames: 3, link: '/web/veteranlite'},
        {project: 'empty', link: ''},
        {project: 'empty', link: ''},
        {project: 'empty', link: ''}
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
    var svg2 = Snap('#select.web')
    var dot2 = svg2.select('.dot.web')
    dot2.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
    $('.link .dot.web').css('opacity','1');
    }
  },
  mounted() {
this.active()
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
