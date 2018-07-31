<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/itsapostcard') past project
    router-link(to='/sites/kigilife' target="_blank" class="link") view website
    router-link(to='/web/energydashboard') next project
  router-link(to='/sites/kigilife' target="_blank" class='viewsite')
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
    router-link(to='/web/itsapostcard') past project
    router-link(to='/sites/kigilife' target="_blank" class="link") view website
    router-link(to='/web/energydashboard') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Kigi Life Website',
    type: 'Complete Design and Development.',
    synopsis: 'Lifestlye Brand Identity, Store and Blog created for Kigi Life. Built on a WordPress backend using Woocommerce and Stripe for online sales.'
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
  height 780px
  &:first-child
    height 500px
    background-image url("/assets/web/kigilife/01.jpg") !important
    +below(900px)
      height 350px !important
  &:nth-of-type(1)
    background-image url("/assets/web/kigilife/02.jpg")
  &:nth-of-type(2)
    background-image url("/assets/web/kigilife/03.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/kigilife/04.jpg")
  &:nth-of-type(4)
    background-image url("/assets/web/kigilife/05.jpg")
</style>