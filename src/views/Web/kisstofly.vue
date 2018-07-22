<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/inteldashboard') past project
    a web
    router-link(to='/web/itsapostcard') next project
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
    router-link(to='/web/inteldashboard') past project
    a web
    router-link(to='/web/itsapostcard') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Kiss To Fly Website',
    type: 'Complete Design and Development.',
    synopsis: 'Business Identity and Blog created for Kiss To Fly.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 580px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/kisstofly/01.jpg");
  &:nth-of-type(2)
    background-image url("/web/kisstofly/02.jpg");
  &:nth-of-type(3)
    background-image url("/web/kisstofly/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/kisstofly/04.jpg");
  &:nth-of-type(5)
    height 780px
    background-image url("/web/kisstofly/05.jpg");
</style>