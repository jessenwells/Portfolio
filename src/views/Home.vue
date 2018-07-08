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
        {project: 'kigilove identity', thumb: '/thumbs/sprite-02.jpg', frames: 5},
        {project: 'nyc tourism', thumb: '/thumbs/sprite-15.jpg', frames: 4},
        {project: 'intel dashboard', thumb: '/thumbs/sprite-08.jpg', frames: 3},
        {project: 'svg animation', thumb: '/thumbs/sprite-23.jpg', frames: 6},
        {project: 'apparel graphic', thumb: '/thumbs/sprite-16.jpg', frames: 3}
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
