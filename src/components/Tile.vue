<template lang="pug">
.tile(v-bind:style="{ backgroundImage: 'url(' + data.thumb + ')' }")
  svg(:id="id" viewBox="0 0 350 350")
    path(:id='"frame"+id' d="M334,175v154c0,2.8-2.2,5-5,5H175H21c-2.8,0-5-2.2-5-5V175V21c0-2.8,2.2-5,5-5h154h154c2.8,0,5,2.2,5,5V175z M350,0H175H0v175v175h175h175V175V0L350,0L350,0z")
    text
      textPath.textpath(:xlink:href='"#arch"+id' startOffset="50%" text-anchor="middle") {{data.project}}
    path.arch(:id='"arch"+id' d="M25.5,319c0,0,74,0,150,0s150,0,150,0")
</template>

<script>
import TweenMax from "gsap/TweenMax";
import hoverintent from "hoverintent/";
export default {
  props: {
    data: ''
  },
  beforeCreate () {
    this.id = this._uid;
  },
  mounted () {
    var el = document.getElementById(this.id)
    var svg = Snap(el)
    var path = svg.select('#arch' + this.id)
    var frame = svg.select('#frame' + this.id)
    var opts = { interval: 5 }
    hoverintent(el,
      function() {
      console.log(path,frame)
        enter()
      }, 
      function() {
        leave()
      });

    function enter() {
      path.animate({ d: "M25.5,319c0,0,74-7,150-7s150,7,150,7"}, 800, mina.bounce);
      frame.animate({ d: "M327,175c0,60.9,4.5,126,6.3,149.7c0.4,4.9-3.7,8.9-8.6,8.6C300.8,331.5,235,327,175,327 c-60,0-125.8,4.5-149.7,6.3c-4.9,0.4-8.9-3.7-8.6-8.6C18.5,301,23,235.7,23,175c0-60.7-4.5-126-6.3-149.7c-0.4-4.9,3.7-8.9,8.6-8.6 C49.2,18.5,115.3,23,175,23c59.7,0,125.8-4.5,149.7-6.3c4.9-0.4,8.9,3.7,8.6,8.6C331.5,49,327,114.1,327,175z M350,0H175H0v175v175 h175h175V175V0L350,0L350,0z"}, 800, mina.bounce);
    };
    function leave() {
      path.animate({ d: "M25.5,319c0,0,74,0,150,0s150,0,150,0"}, 1200, mina.elastic);
      frame.animate({ d: "M334,175v154c0,2.8-2.2,5-5,5H175H21c-2.8,0-5-2.2-5-5V175V21c0-2.8,2.2-5,5-5h154h154c2.8,0,5,2.2,5,5V175z M350,0H175H0v175v175h175h175V175V0L350,0L350,0z"}, 1200, mina.elastic);
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
.tile
  width 350px
  height 350px
  background-size 350px
  display flex
  align-items center
  justify-content center
  position relative
  text
    fill lightcyan
  svg
    position absolute
  [id^=frame]
    fill lightcyan
  [id^=arch]
    fill transparent
  &.empty
    height 0
    font-size 0
    margin-top 0
    margin-bottom 0
    svg
      display none
</style>
