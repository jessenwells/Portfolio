<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/zedgirl') past project
    router-link(to='/branding') view branding
    router-link(to='/web/slek') next project
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
    router-link(to='/branding/zedgirl') past project
    router-link(to='/branding') view branding
    router-link(to='/web/slek') next project
</template>

<script>
export default {
data() {
  return {
    project: 'RNR',
    type: 'Logo Design',
    synopsis: 'Logotypes created for RNR, RevelatioNoituloveR and RhythmNRace Music.',
    image: {
      path1: '/assets/branding/rnr/01.jpg',
      path2: '/assets/branding/rnr/02.jpg',
      path3: '/assets/branding/rnr/03.jpg',
      path4: '/assets/branding/rnr/04.jpg',
      path5: '/assets/branding/rnr/05.jpg'
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
.image
  height 780px
  &:nth-of-type(1)
    background-image url("/assets/branding/rnr/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/rnr/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/rnr/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/rnr/04.jpg");
  &:nth-of-type(5)
    background-image url("/assets/branding/rnr/05.jpg");
</style>