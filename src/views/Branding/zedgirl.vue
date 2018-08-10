<template lang='pug'>
#single-page(v-touch:swipe.right="past" v-touch:swipe.left="next")
  span.catnav
    router-link#past(to='/branding/learn&explore') past project
    router-link(to='/branding') view branding
    router-link#next(to='/branding/rnr') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  span.catnav
    router-link(to='/branding/learn&explore') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/rnr') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Zed Girl',
    type: 'Logo Design',
    synopsis: 'Logotype created for Zed Girl, makeup and beauty products.',
    image: {
      path1: '/assets/branding/zedgirl/01.jpg',
      path2: '/assets/branding/zedgirl/02.jpg',
      path3: '/assets/branding/zedgirl/03.jpg',
      path4: '/assets/branding/zedgirl/04.jpg'
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
    background-image url("/assets/branding/zedgirl/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/zedgirl/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/zedgirl/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/zedgirl/04.jpg");
</style>