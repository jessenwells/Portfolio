<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/slek') past project
    a web
    router-link(to='/web/kisstofly') next project
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
    router-link(to='/web/slek') past project
    a web
    router-link(to='/web/kisstofly') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Administration Dashboard',
    type: 'Front End Design and Development.',
    synopsis: 'Administration Dashboard including interactive map created for Energy Company. Where employees can monitor energy facility emissions and statistics based on location.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 525px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/inteldashboard/01.jpg");
  &:nth-of-type(2)
    height 575px
    background-image url("/web/inteldashboard/02.jpg");
  &:nth-of-type(3)
    height 780px
    background-image url("/web/inteldashboard/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/inteldashboard/04.jpg");
  &:nth-of-type(5)
    background-image url("/web/inteldashboard/05.jpg");
  &:nth-of-type(6)
    background-image url("/web/inteldashboard/06.jpg");
</style>