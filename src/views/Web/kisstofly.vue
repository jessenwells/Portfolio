<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/inteldashboard') past project
    router-link(to='/sites/kisstofly' target="_blank" class="link") view website
    router-link(to='/web/itsapostcard') next project
  router-link(to='/sites/kisstofly' target="_blank" class='viewsite')
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
    router-link(to='/sites/kisstofly' target="_blank" class="link") view website
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
},
  metaInfo() {
    return {
      title: this.type
      }
    }
}
</script>

<style lang='stylus' scoped>
@import "../../assets/mq"
a.viewsite
  width 100%
.image
  height 580px
  &:first-child
    height 500px
    background-image url("/web/kisstofly/01.jpg") !important
    +below(900px)
      height 350px !important
  &:nth-of-type(1)
    background-image url("/web/kisstofly/02.jpg")
  &:nth-of-type(2)
    background-image url("/web/kisstofly/03.jpg")
  &:nth-of-type(3)
    background-image url("/web/kisstofly/04.jpg")
  &:nth-of-type(4)
    height 780px
    background-image url("/web/kisstofly/05.jpg")
</style>