<template lang="pug">
#tile-grid(@mouseover="ready")
  tile(v-for="tile in info" :details="tile" :class="tile.tag" :key="info.index" @hover="clickReady" @link="linkReady" @name="nameReady")
</template>

<script>
import tile from '../components/Tile'
export default {
  components: {
    tile
  },
  metaInfo: {
      title: 'Web'
    },
  data() {
    return {
      info: [
        {project: 'salon & store', thumb: '/assets/thumbs/sprite-07.jpg', frames: 3, link: '/web/slek', tag: 'store'},
        {project: 'admin dashboard', thumb: '/assets/thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard', tag: 'admin1'},
        {project: 'business & blog', thumb: '/assets/thumbs/sprite-09.jpg', frames: 3, link: '/web/kisstofly', tag: 'blog'},
        {project: 'user dashboard', thumb: '/assets/thumbs/sprite-10.jpg', frames: 3, link: '/web/itsapostcard', tag: 'user'},
        {project: 'lifestyle store', thumb: '/assets/thumbs/sprite-11.jpg', frames: 3, link: '/web/kigilife', tag: 'life'},
        {project: 'admin dashboard', thumb: '/assets/thumbs/sprite-12.jpg', frames: 3, link: '/web/energydashboard', tag: 'admin2'},
        {project: 'app launch site', thumb: '/assets/thumbs/sprite-13.jpg', frames: 3, link: '/web/adwap', tag: 'launch'},
        {project: 'admin dashboard', thumb: '/assets/thumbs/sprite-14.jpg', frames: 3, link: '/web/veteranlite', tag: 'admin3'},
        {project: 'empty', link: '', tag: 'empty'},
        {project: 'empty', link: '', tag: 'empty'},
        {project: 'empty', link: '', tag: 'empty'}
    ]
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
  }
}
</script>

<style lang="stylus">
</style>
