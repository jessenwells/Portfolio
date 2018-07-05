<template lang="pug">
#tile-grid
  tile(v-for="tile in info" :data="tile" :class="tile.project" :key="info.index")
</template>

<script>
import tile from '../components/Tile';
export default {
  data() {
    return {
      info: [
        {project: 'nine', thumb: '/thumbs/sprite-21.jpg'},
        {project: 'ten', thumb: '/thumbs/sprite-22.jpg'},
        {project: 'eleven', thumb: '/thumbs/sprite-23.jpg'},
        {project: 'twelve', thumb: '/thumbs/sprite-24.jpg'},
        {project: 'thirteen', thumb: '/thumbs/sprite-25.jpg'},
        {project: 'fourteen', thumb: '/thumbs/sprite-26.jpg'}
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
