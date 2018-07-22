<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/kigilife') past project
    a web
    router-link(to='/web/adwap') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  .image
  .image
  span.catnav
    router-link(to='/web/kigilife') past project
    a web
    router-link(to='/web/adwap') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Administration Dashboard',
    type: 'Front End Design and Development.',
    synopsis: 'Administrative Dashboard including interactive map and infographic animations created for Energy Company. Where employees can monitor energy facility by type and location. View statistics from each plant and specific generating units of each plant.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 580px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/energydashboard/01.jpg");
  &:nth-of-type(2)
    background-image url("/web/energydashboard/02.jpg");
  &:nth-of-type(3)
    background-image url("/web/energydashboard/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/energydashboard/04.jpg");
  &:nth-of-type(5)
    background-image url("/web/energydashboard/05.jpg");
</style>