<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/rnr') past project
    router-link(to='/sites/slek' target="_blank" class="link") view website
    router-link(to='/web/inteldashboard') next project
  router-link(to='/sites/slek' target="_blank" class='viewsite')
    .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  .image(:data-src='image.path5')
  .image(:data-src='image.path6')
  span.catnav
    router-link(to='/branding/rnr') past project
    router-link(to='/sites/slek' target="_blank" class="link") view website
    router-link(to='/web/inteldashboard') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Slek Hair',
    type: 'Front End Design and Development.',
    synopsis: 'Subscription based online store and salon created for Slek Hair. Built on a WordPress backend using Woocommerce and Stripe for all sales, recurring monthly member subscriptions and appointment booking.',
    image: {
      path1: '/assets/web/slek/01.jpg',
      path2: '/assets/web/slek/02.jpg',
      path3: '/assets/web/slek/03.jpg',
      path4: '/assets/web/slek/04.jpg',
      path5: '/assets/web/slek/05.jpg',
      path6: '/assets/web/slek/06.jpg'
    }
  }
},
  metaInfo() {
    return {
      title: this.type
      }
    },
  mounted() {
      var MobileDetect = require('mobile-detect')
      var md = new MobileDetect(window.navigator.userAgent);
        if(md.mobile()) {
          document.querySelectorAll('.image').forEach(function(elem) {
            const basicLightbox = require('basiclightbox')
            elem.onclick = function(e) {
              const src = elem.getAttribute('data-src')
              const html = '<img src="' + src + '">'
              basicLightbox.create(html).show()
            }
          })
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
    background-image url("/assets/web/slek/01.jpg") !important
    +below(900px)
      height 350px !important
  &:nth-of-type(1)
    background-image url("/assets/web/slek/02.jpg")
  &:nth-of-type(2)
    background-image url("/assets/web/slek/03.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/slek/04.jpg")
  &:nth-of-type(4)
    background-image url("/assets/web/slek/05.jpg")
  &:nth-of-type(5)
    background-image url("/assets/web/slek/06.jpg")
</style>