<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/branding/musicmilitia') past project
    router-link(to='/branding') view branding
    router-link#next(to='/branding/slekhair') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  span.catnav
    router-link(to='/branding/musicmilitia') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/slekhair') next project
</template>

<script>

export default {
data() {
  return {
    project: 'Kigi Love',
    type: 'Identity Design',
    synopsis: 'Corporate Identity created for Kigi Love, a social community whose mission is to empower a love based society through education, publication, and cultivation.',
    image: {
      path1: '/assets/branding/kigilove/01.jpg',
      path2: '/assets/branding/kigilove/02.jpg',
      path3: '/assets/branding/kigilove/03.jpg',
      path4: '/assets/branding/kigilove/04.jpg'
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
  height 500px
  &:nth-of-type(1)
    background-image url("/assets/branding/kigilove/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/kigilove/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/kigilove/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/kigilove/04.jpg");
@media (max-width: 900px)
  .image
    height 320px !important
    width 100%
    background-size contain
    background-position 50%
</style>