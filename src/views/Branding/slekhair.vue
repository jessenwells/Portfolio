<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/kigilove') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/learn&explore') next project
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
    router-link(to='/branding/kigilove') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/learn&explore') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Slek',
    type: 'Identity Design',
    synopsis: 'Corporate Identity created for Slek Hair, a hair & beauty maintenance movement, styling bar and online store with subscription based discount human hair and accessories.',
    image: {
      path1: '/assets/branding/slekhair/01.jpg',
      path2: '/assets/branding/slekhair/02.jpg',
      path3: '/assets/branding/slekhair/03.jpg',
      path4: '/assets/branding/slekhair/04.jpg',
      path5: '/assets/branding/slekhair/05.jpg'
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
    height 600px
    background-image url("/assets/branding/slekhair/01.jpg");
  &:nth-of-type(2)
    height 535px
    background-image url("/assets/branding/slekhair/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/slekhair/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/slekhair/04.jpg");
  &:nth-of-type(5)
    background-image url("/assets/branding/slekhair/05.jpg");
@media (max-width: 900px)
  .image
    width 100%
    background-size contain
    background-position 50%
</style>