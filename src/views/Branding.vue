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
        {project: 'nine', thumb: '/thumbs/sprite-01.jpg'},
        {project: 'ten', thumb: '/thumbs/sprite-02.jpg'},
        {project: 'eleven', thumb: '/thumbs/sprite-03.jpg'},
        {project: 'twelve', thumb: '/thumbs/sprite-04.jpg'},
        {project: 'thirteen', thumb: '/thumbs/sprite-05.jpg'},
        {project: 'fourteen', thumb: '/thumbs/sprite-06.jpg'}
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
