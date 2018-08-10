<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/web/energydashboard') past project
    router-link(to='/sites/adwap' target="_blank" class="link") view website
    router-link#next(to='/web/veteranlite') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  span.catnav
    router-link(to='/web/energydashboard') past project
    router-link(to='/sites/adwap' target="_blank" class="link") view website
    router-link(to='/web/veteranlite') next project

</template>

<script>
export default {
data() {
  return {
    project: 'Application Launch Site',
    type: 'Front End Design and Development.',
    synopsis: 'If you are reading this than you are a thorough person. I will update this description tomorrow.',
    image: {
      path1: '/assets/web/adwap/01.jpg',
      path2: '/assets/web/adwap/02.jpg',
      path3: '/assets/web/adwap/03.jpg',
      path4: '/assets/web/adwap/04.jpg'
    },
    past: '',
    next: ''
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
  &:nth-of-type(1)
    background-image url("/assets/web/adwap/01.jpg")
    height 500px
    +below(900px)
      height 350px !important
  &:nth-of-type(2)
    background-image url("/assets/web/adwap/02.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/adwap/03.jpg")
  &:nth-of-type(4)
    background-image url("/assets/web/adwap/04.jpg")
</style>