<template lang="pug">
#tile-grid
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index")
</template>

<script>
import tile from '../components/Tile';
export default {
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
  components: {
    tile
  }
}
</script>

<style lang="stylus">
@import '../style/mq.styl'
</style>
