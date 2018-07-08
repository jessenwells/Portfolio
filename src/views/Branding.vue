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
        {project: 'muscitia', thumb: '/thumbs/sprite-01.jpg', frames: 3},
        {project: 'kigi love', thumb: '/thumbs/sprite-02.jpg', frames: 3},
        {project: 'slek hair', thumb: '/thumbs/sprite-03.jpg', frames: 3},
        {project: 'learn & explore', thumb: '/thumbs/sprite-04.jpg', frames: 3},
        {project: 'zed girl', thumb: '/thumbs/sprite-05.jpg', frames: 3},
        {project: 'r n r', thumb: '/thumbs/sprite-06.jpg', frames: 4}
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
