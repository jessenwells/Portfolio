<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/web/adwap') past project
    router-link(to='/sites/vetlite' target="_blank" class="link") view website
    router-link#next(to='/apparel/nycskyline') next project
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
    router-link(to='/web/adwap') past project
    router-link(to='/sites/vetlite' target="_blank" class="link") view website
    router-link(to='/apparel/nycskyline') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Monitoring Dashboard',
    type: 'Front End Design.',
    synopsis: 'If you are reading this than you are a thorough person. I will update this description Thursday.',
    image: {
      path1: '/assets/web/veteranlite/01.jpg',
      path2: '/assets/web/veteranlite/02.jpg',
      path3: '/assets/web/veteranlite/03.jpg',
      path4: '/assets/web/veteranlite/04.jpg',
      path5: '/assets/web/veteranlite/05.jpg',
      path6: '/assets/web/veteranlite/06.jpg'
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
    background-image url("/assets/web/veteranlite/01.jpg")
    height 500px
    +below(900px)
      height 350px !important
  &:nth-of-type(2)
    background-image url("/assets/web/veteranlite/02.jpg")
  &:nth-of-type(3)
    background-image url("/assets/web/veteranlite/03.jpg")
  &:nth-of-type(4)
    background-image url("/assets/web/veteranlite/04.jpg")
  &:nth-of-type(5)
    background-image url("/assets/web/veteranlite/05.jpg")
  &:nth-of-type(6)
    background-image url("/assets/web/veteranlite/06.jpg")
</style>