<template lang="pug">
#tile-grid
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index" :href="'../here/'+tile.project")
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
        {project: 'nyc skyline', thumb: '/thumbs/sprite-15.jpg', frames: 4},
        {project: 'relief crown', thumb: '/thumbs/sprite-16.jpg', frames: 3},
        {project: 'nyc text map', thumb: '/thumbs/sprite-17.jpg', frames: 4},
        {project: 'distress pyramid', thumb: '/thumbs/sprite-18.jpg', frames: 5},
        {project: 'moody line art', thumb: '/thumbs/sprite-19.jpg', frames: 5},
        {project: 'nyc liberty', thumb: '/thumbs/sprite-20.jpg', frames: 4}
    ]
    };
  },
  computed: {
    
  }
}
</script>

<style lang="stylus">
@import '../style/mq.styl'
</style>
