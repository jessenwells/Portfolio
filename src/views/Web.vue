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
        {project: 'nine', thumb: '/thumbs/sprite-07.jpg'},
        {project: 'ten', thumb: '/thumbs/sprite-08.jpg'},
        {project: 'eleven', thumb: '/thumbs/sprite-09.jpg'},
        {project: 'twelve', thumb: '/thumbs/sprite-10.jpg'},
        {project: 'thirteen', thumb: '/thumbs/sprite-11.jpg'},
        {project: 'fourteen', thumb: '/thumbs/sprite-12.jpg'},
        {project: 'thirteen', thumb: '/thumbs/sprite-13.jpg'},
        {project: 'fourteen', thumb: '/thumbs/sprite-14.jpg'},
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
