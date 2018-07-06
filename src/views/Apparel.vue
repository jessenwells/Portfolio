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
        {project: 'nine', thumb: '/thumbs/sprite-15.jpg'},
        {project: 'ten', thumb: '/thumbs/sprite-16.jpg'},
        {project: 'eleven', thumb: '/thumbs/sprite-17.jpg'},
        {project: 'twelve', thumb: '/thumbs/sprite-18.jpg'},
        {project: 'thirteen', thumb: '/thumbs/sprite-19.jpg'},
        {project: 'fourteen', thumb: '/thumbs/sprite-20.jpg'}
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
