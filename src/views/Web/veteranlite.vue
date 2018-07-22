<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/adwap') past project
    a web
    router-link(to='/apparel/nycskyline') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  .image
  .image
  .image
  span.catnav
    router-link(to='/web/adwap') past project
    a web
    router-link(to='/apparel/nycskyline') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Monitoring Dashboard',
    type: 'Front End Design.',
    synopsis: 'If you are reading this than you are a thorough person. I will update this description Thursday.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/veteranlite/01.jpg");
  &:nth-of-type(2)
    background-image url("/web/veteranlite/02.jpg");
  &:nth-of-type(3)
    background-image url("/web/veteranlite/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/veteranlite/04.jpg");
  &:nth-of-type(5)
    background-image url("/web/veteranlite/05.jpg");
  &:nth-of-type(6)
    background-image url("/web/veteranlite/06.jpg");
</style>