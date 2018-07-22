<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/kisstofly') past project
    a web
    router-link(to='/web/kigilife') next project
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
    router-link(to='/web/kisstofly') past project
    a web
    router-link(to='/web/kigilife') next project
</template>

<script>
export default {
data() {
  return {
    project: 'User Dashboard',
    type: 'Front End Design and Development.',
    synopsis: 'Administrative Dashboard including interactive map and infographic animations created for Energy Company. Where employees can monitor energy facility by type and location. View statistics from each plant and specific generating units of each plant.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/itsapostcard/01.jpg");
  &:nth-of-type(2)
    height 525px
    background-image url("/web/itsapostcard/02.jpg");
  &:nth-of-type(3)
    height 520px
    background-image url("/web/itsapostcard/03.jpg");
  &:nth-of-type(4)
    height 1450px
    background-image url("/web/itsapostcard/04.jpg");
  &:nth-of-type(5)
    background-image url("/web/itsapostcard/05.jpg");
</style>