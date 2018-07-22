<template lang="pug">
#tile-grid
  router-view
  tile(v-for="tile in info" :details="tile" :class="tile.project" :key="info.index")
</template>

<script>
import tile from '../components/Tile';
export default {
  data() {
    return {
      info: [
        {project: 'music militia', thumb: '/thumbs/sprite-01.jpg', frames: 3, link: '/branding/musicmilitia'},
        {project: 'kigi love', thumb: '/thumbs/sprite-02.jpg', frames: 3, link: '/branding/kigilove'},
        {project: 'slek hair', thumb: '/thumbs/sprite-03.jpg', frames: 3, link: '/branding/slekhair'},
        {project: 'learn & explore', thumb: '/thumbs/sprite-04.jpg', frames: 3, link: '/branding/learn&explore'},
        {project: 'zed girl', thumb: '/thumbs/sprite-05.jpg', frames: 3, link: '/branding/zedgirl'},
        {project: 'r n r', thumb: '/thumbs/sprite-06.jpg', frames: 4, link: '/branding/rnr'}
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
