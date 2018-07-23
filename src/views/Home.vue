<template lang="pug">
#tile-grid.home
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index")
</template>

<script>
import tile from '../components/Tile';
export default {
  data() {
    return {
      info: [
        {project: 'salon & store', thumb: '/thumbs/sprite-07.jpg', frames: 3, link: '/web/slek'},
        {project: 'kigilove identity', thumb: '/thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove'},
        {project: 'nyc tourism', thumb: '/thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline'},
        {project: 'intel dashboard', thumb: '/thumbs/sprite-08.jpg', frames: 3, link: '/web/inteldashboard'},
        {project: 'svg animation', thumb: '/thumbs/sprite-23.jpg', frames: 6, link: '/playground/svgdrawpath'},
        {project: 'apparel graphic', thumb: '/thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown'}
    ]
    };
  },
  components: {
    tile
  }
}
</script>

<style lang="stylus">
@import '../style/mq.styl'
</style>
