<template lang="pug">
#tile-grid
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index")
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
  }
}
</script>

<style lang="stylus">
</style>
