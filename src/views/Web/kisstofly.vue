<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/inteldashboard') past project
    router-link(to='/sites/kisstofly' target="_blank" class="link") view website
    router-link(to='/web/itsapostcard') next project
  router-link(to='/sites/kisstofly' target="_blank" class='viewsite')
    .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  .image(:data-src='image.path5')
  span.catnav
    router-link(to='/web/inteldashboard') past project
    router-link(to='/sites/kisstofly' target="_blank" class="link") view website
    router-link(to='/web/itsapostcard') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Kiss To Fly',
    type: 'Font End Design and Development.',
    synopsis: 'Business Identity and Blog created for Kiss To Fly.',
    image: {
      path1: '/assets/web/kisstofly/01.jpg',
      path2: '/assets/web/kisstofly/02.jpg',
      path3: '/assets/web/kisstofly/03.jpg',
      path4: '/assets/web/kisstofly/04.jpg',
      path5: '/assets/web/kisstofly/05.jpg'
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
  height 580px
  &:first-child
    height 500px
    background-image url("/assets/web/kisstofly/01.jpg") !important
    +below(900px)
      height 350px !important
  &:nth-of-type(1)
    background-image url("/assets/web/kisstofly/02.jpg")
  &:nth-of-type(2)
    background-image url("/assets/web/kisstofly/03.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/kisstofly/04.jpg")
  &:nth-of-type(4)
    height 780px
    background-image url("/assets/web/kisstofly/05.jpg")
</style>