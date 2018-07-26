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
        {project: 'nyc skyline', thumb: '/thumbs/sprite-15.jpg', frames: 4, link: '/apparel/nycskyline'},
        {project: 'relief crown', thumb: '/thumbs/sprite-16.jpg', frames: 3, link: '/apparel/crown'},
        {project: 'nyc text map', thumb: '/thumbs/sprite-17.jpg', frames: 4, link: '/apparel/nycmap'},
        {project: 'distress pyramid', thumb: '/thumbs/sprite-18.jpg', frames: 5, link: '/apparel/pyramid'},
        {project: 'moody line art', thumb: '/thumbs/sprite-19.jpg', frames: 5, link: '/apparel/moody'},
        {project: 'nyc liberty', thumb: '/thumbs/sprite-20.jpg', frames: 4, link: '/apparel/nycliberty'}
    ]
    };
  }
}
</script>

<style lang="stylus">

</style>
