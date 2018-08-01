<template lang="pug">
div(@mouseover='hoverReady')
  router-link(:to="details.link" event='')
    .tile(:style="thumb" :id='"tile"+id' :class='"play"+details.frames')
      svg(:id='"svg"+id' viewBox="0 0 350 350")
        path(:id='"frame"+id' d="M334,175v154c0,2.8-2.2,5-5,5H175H21c-2.8,0-5-2.2-5-5V175V21c0-2.8,2.2-5,5-5h154h154c2.8,0,5,2.2,5,5V175z M350,0H175H0v175v175h175h175V175V0L350,0L350,0z")
        text
          textPath.textpath(:xlink:href='"#arch"+id' startOffset="50%" text-anchor="middle") {{details.project}}
        path.arch(:id='"arch"+id' d="M25.5,319c0,0,74,0,150,0s150,0,150,0")
</template>

<script>
import hoverintent from "hoverintent/"
import Snap from "snapsvg"

export default {
  props: ["details"],
  data() {
    return {
      thumb: { backgroundImage: "url(" + this.details.thumb + ")" },
      frames: this.details.frames,
      url: this.details.link,
      name: this.details.tag
    };
  },
  beforeCreate() {
    this.id = this._uid
  },
  mounted() {
    var hov = document.getElementById("hov" + this.id)
    var tile = document.getElementById("tile" + this.id)
    var tileSvg = document.getElementById("svg" + this.id)
    var svg = Snap(tileSvg)
    var path = svg.select("#arch" + this.id)
    var frame = svg.select("#frame" + this.id)
    var frames = this.frames
    var opts = { interval: 5 };

    hoverintent(
      tile,
        function() { enter(); },
        function() { leave(); }
      );

    function enter() {
      tile.classList.add("play");
      path.animate( { d: "M25.5,319c0,0,74-7,150-7s150,7,150,7" }, 800, mina.bounce );
      frame.animate( { d: "M327,175c0,60.9,4.5,126,6.3,149.7c0.4,4.9-3.7,8.9-8.6,8.6C300.8,331.5,235,327,175,327 c-60,0-125.8,4.5-149.7,6.3c-4.9,0.4-8.9-3.7-8.6-8.6C18.5,301,23,235.7,23,175c0-60.7-4.5-126-6.3-149.7c-0.4-4.9,3.7-8.9,8.6-8.6 C49.2,18.5,115.3,23,175,23c59.7,0,125.8-4.5,149.7-6.3c4.9-0.4,8.9,3.7,8.6,8.6C331.5,49,327,114.1,327,175z M350,0H175H0v175v175 h175h175V175V0L350,0L350,0z" }, 800, mina.bounce );
    }
    function leave() {
      tile.classList.remove("play");
      path.animate( { d: "M25.5,319c0,0,74,0,150,0s150,0,150,0" }, 1200, mina.elastic );
      frame.animate( { d: "M334,175v154c0,2.8-2.2,5-5,5H175H21c-2.8,0-5-2.2-5-5V175V21c0-2.8,2.2-5,5-5h154h154c2.8,0,5,2.2,5,5V175z M350,0H175H0v175v175h175h175V175V0L350,0L350,0z" }, 1200, mina.elastic);
    }
  },
  methods: {
    hoverReady (event) {
      this.$emit('hover', 'true'),
      this.$emit('link', this.url),
      this.$emit('name', this.name)
    }
  }
};
</script>

<style lang="stylus">
@import '../assets/mq';

.tile 
  width 350px
  height 350px
  display flex
  align-items center
  justify-content center
  position relative
  background-size 350px
  background-position 0 0
  animation-play-state paused
  &.play.play 
    animation-play-state running
  &.play3 
    animation sprite3 2s -0.3s steps(3) infinite
    animation-play-state paused
  &.play4 
    animation sprite4 3s -0.5s steps(4) infinite
    animation-play-state paused
  &.play5 
    animation sprite6 4s -0.4s steps(6) infinite
    animation-play-state paused
  &.play6 
    animation sprite6 1.5s -0.2s steps(6) infinite
    animation-play-state paused
  +below(1098px)
    width 450px
    height 450px
    background-size 450px
  text 
    font-family 'Quicksand', sans-serif
    font-size 0.86em
    text-transform uppercase
    letter-spacing 0.05em
    font-weight 400
    fill #FFF
  [id^=svg] 
    position absolute
    margin -1px
    width 352px
    height 352px
    +below(1098px)
      width 454px
      height 454px
  [id^=frame] 
    fill #f7f7f7
  [id^=arch] 
    fill transparent
.empty 
  pointer-events none
  .tile 
    height 0
    font-size 0
    margin-top 0
    margin-bottom 0
    svg 
      display none

</style>
