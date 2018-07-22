<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/itsapostcard') past project
    a web
    router-link(to='/web/energydashboard') next project
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
    a web
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
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    height 500px
    background-image url("/web/kigilife/01.jpg");
  &:nth-of-type(2)
    background-image url("/web/kigilife/02.jpg");
  &:nth-of-type(3)
    background-image url("/web/kigilife/03.jpg");
  &:nth-of-type(4)
    background-image url("/web/kigilife/04.jpg");
  &:nth-of-type(5)
    background-image url("/web/kigilife/05.jpg");
</style>