<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/slek') past project
    router-link(to='/sites/intel' target="_blank" class="link") view website
    router-link(to='/web/kisstofly') next project
  router-link(to='/sites/intel' target="_blank" class='viewsite') 
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
    router-link(to='/sites/intel' target="_blank" class="link") view website
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
  height 525px
  &:first-child
    height 500px
    background-image url("/web/inteldashboard/01.jpg") !important
    +below(900px)
      height 350px !important
  &:nth-of-type(1)
    height 575px
    background-image url("/web/inteldashboard/02.jpg")
  &:nth-of-type(2)
    height 780px
    background-image url("/web/inteldashboard/03.jpg")
  &:nth-of-type(3)
    background-image url("/web/inteldashboard/04.jpg")
  &:nth-of-type(4)
    background-image url("/web/inteldashboard/05.jpg")
  &:nth-of-type(5)
    background-image url("/web/inteldashboard/06.jpg")
</style>