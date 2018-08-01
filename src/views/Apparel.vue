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
      title: 'Apparel'
    },
  data() {
    return {
      info: [
        {project: 'nyc skyline', thumb: '/assets/thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline', tag: 'sky'},
        {project: 'relief crown', thumb: '/assets/thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown', tag: 'crown'},
        {project: 'nyc text map', thumb: '/assets/thumbs/sprite-17.jpg', frames: 4, link: '/apparel/nycmap', tag: 'map'},
        {project: 'distress pyramid', thumb: '/assets/thumbs/sprite-18.jpg', frames: 5, link: '/apparel/pyramid', tag: 'pyramid'},
        {project: 'moody line art', thumb: '/assets/thumbs/sprite-19.jpg', frames: 5, link: '/apparel/moody', tag: 'moody'},
        {project: 'nyc liberty', thumb: '/assets/thumbs/sprite-20.jpg', frames: 4, link: '/apparel/nycliberty', tag: 'liberty'}
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
    var svg3 = Snap('#select.apparel')
    var dot3 = svg3.select('.dot.apparel')
    dot3.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
    $('.link .dot.apparel').css('opacity','1');
    }
  },
  mounted() {
    var images = [];
      function preload() {
          for (var i = 0; i < arguments.length; i++) {
              images[i] = new Image();
              images[i].src = preload.arguments[i];
          }
}

preload(
    "/assets/thumbs/sprite-15.jpg",
    "/assets/thumbs/sprite-16.jpg",
    "/assets/thumbs/sprite-17.jpg",
    "/assets/thumbs/sprite-18.jpg",
    "/assets/thumbs/sprite-19.jpg",
    "/assets/thumbs/sprite-20.jpg"
)

  this.active()
  
  }
}
</script>

<style lang="stylus">

</style>
