<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/energydashboard') past project
    a web
    router-link(to='/web/veteranlite') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  .image
  span.catnav
    router-link(to='/web/energydashboard') past project
    a web
    router-link(to='/web/veteranlite') next project

</template>

<script>
export default {
data() {
  return {
    project: 'Application Launch Site',
    type: 'Front End Design and Development.',
    synopsis: 'If you are reading this than you are a thorough person. I will update this description tomorrow.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  &:nth-of-type(1)
    height 500px
    background-image url("/web/adwap/01.jpg");
  &:nth-of-type(2)
    background-image url("/web/adwap/02.jpg");
  &:nth-of-type(3)
    background-image url("/web/adwap/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/adwap/04.jpg");
</style>