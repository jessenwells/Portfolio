<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/adwap') past project
    router-link(to='/sites/vetlite' target="_blank") view website
    router-link(to='/apparel/nycskyline') next project
  router-link(to='/sites/vetlite' target="_blank" class='viewsite')
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
    router-link(to='/sites/vetlite' target="_blank") view website
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
a.viewsite
  width 100%
.image
  height 780px
  &:first-child
    height 500px
    background-image url("/web/veteranlite/01.jpg") !important
  &:nth-of-type(1)
    background-image url("/web/veteranlite/02.jpg")
  &:nth-of-type(2)
    background-image url("/web/veteranlite/03.jpg")
  &:nth-of-type(3)
    background-image url("/web/veteranlite/04.jpg")
  &:nth-of-type(4)
    background-image url("/web/veteranlite/05.jpg")
  &:nth-of-type(5)
    background-image url("/web/veteranlite/06.jpg")
</style>