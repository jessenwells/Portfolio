<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/rnr') past project
    router-link(to='/sites/slek' target="_blank" class="link") view website
    router-link(to='/web/inteldashboard') next project
  router-link(to='/sites/slek' target="_blank" class='viewsite')
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
    router-link(to='/branding/rnr') past project
    router-link(to='/sites/slek' target="_blank" class="link") view website
    router-link(to='/web/inteldashboard') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Slek Hair Website',
    type: 'Complete Design and Development.',
    synopsis: 'Subscription based online store and salon created for Slek Hair. Built on a WordPress backend using Woocommerce and Stripe for all sales, recurring monthly member subscriptions and appointment booking.'
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
    background-image url("/web/slek/01.jpg") !important
  &:nth-of-type(1)
    background-image url("/web/slek/02.jpg")
  &:nth-of-type(2)
    background-image url("/web/slek/03.jpg")
  &:nth-of-type(3)
    background-image url("/web/slek/04.jpg")
  &:nth-of-type(4)
    background-image url("/web/slek/05.jpg")
  &:nth-of-type(5)
    background-image url("/web/slek/06.jpg")
</style>