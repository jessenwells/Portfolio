<template lang='pug'>
#single-page(v-touch:swipe.right="past" v-touch:swipe.left="next")
  span.catnav
    router-link#past(to='/playground/sasscolor') past project
    router-link(to='/branding') view branding
    router-link#next(to='/branding/kigilove') next project
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
    router-link(to='/playground/sasscolor') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/kigilove') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Music Militia',
    type: 'Identity Design',
    synopsis: 'Corporate Identity created for The Music Militia, an internet radio service for new and aspiring artists. Logotype inspiration from a military badge.',
    image: {
      path1: '/assets/branding/musicmilitia/01.jpg',
      path2: '/assets/branding/musicmilitia/02.jpg',
      path3: '/assets/branding/musicmilitia/03.jpg',
      path4: '/assets/branding/musicmilitia/04.jpg',
      path5: '/assets/branding/musicmilitia/05.jpg',
      path6: '/assets/branding/musicmilitia/06.jpg'
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
.image
  height 780px
  &:nth-of-type(1)
    height 500px
    background-image url("/assets/branding/musicmilitia/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/musicmilitia/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/musicmilitia/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/musicmilitia/04.jpg");
  &:nth-of-type(5)
    background-image url("/assets/branding/musicmilitia/05.jpg");
  &:nth-of-type(6)
    background-image url("/assets/branding/musicmilitia/06.jpg");
@media (max-width: 900px)
  .image
    width 100%
    background-size cover
    max-height 380px
    background-position 50%
</style>