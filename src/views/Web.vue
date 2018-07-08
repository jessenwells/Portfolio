<template lang="pug">
#tile-grid
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index" :href="'../here/'+tile.project")
</template>

<script>
import tile from '../components/Tile';
export default {
  data() {
    return {
      info: [
        {project: 'salon & store', thumb: '/thumbs/sprite-07.jpg', frames: 3},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-08.jpg', frames: 3},
        {project: 'business & blog', thumb: '/thumbs/sprite-09.jpg', frames: 3},
        {project: 'user dashboard', thumb: '/thumbs/sprite-10.jpg', frames: 3},
        {project: 'lifestyle store', thumb: '/thumbs/sprite-11.jpg', frames: 3},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-12.jpg', frames: 3},
        {project: 'charity minisite', thumb: '/thumbs/sprite-13.jpg', frames: 3},
        {project: 'admin dashboard', thumb: '/thumbs/sprite-14.jpg', frames: 3},
        {project: 'empty'},
        {project: 'empty'},
        {project: 'empty'}
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
