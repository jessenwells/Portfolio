<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/web/kisstofly') past project
    router-link(to='/sites/itsapostcard' target="_blank" class="link") view website
    router-link#next(to='/web/kigilife') next project
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
    router-link(to='/web/kisstofly') past project
    router-link(to='/sites/itsapostcard' target="_blank" class="link") view website
    router-link(to='/web/kigilife') next project
</template>

<script>
export default {
data() {
  return {
    project: 'User Dashboard',
    type: 'Front End Design and Development.',
    synopsis: 'Administrative Dashboard including interactive map and infographic animations created for Energy Company. Where employees can monitor energy facility by type and location. View statistics from each plant and specific generating units of each plant.',
    image: {
      path1: '/assets/web/itsapostcard/01.jpg',
      path2: '/assets/web/itsapostcard/02.jpg',
      path3: '/assets/web/itsapostcard/03.jpg',
      path4: '/assets/web/itsapostcard/04.jpg',
      path5: '/assets/web/itsapostcard/05.jpg'
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
  +below(900px)
      height 580px !important 
  &:nth-of-type(1)
    background-image url("/assets/web/itsapostcard/01.jpg")
    height 500px
    +below(900px)
      height 350px !important
  &:nth-of-type(2)
    background-image url("/assets/web/itsapostcard/02.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/itsapostcard/03.jpg")
    height 525px
    +below(900px)
      height 400px !important
  &:nth-of-type(4)
    background-image url("/assets/web/itsapostcard/04.jpg")
    height 1450px
    +below(900px)
      height 1160px !important
  &:nth-of-type(5)
    background-image url("/assets/web/itsapostcard/05.jpg")
</style>