<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/branding/slekhair') past project
    router-link(to='/branding') view branding
    router-link#next(to='/branding/zedgirl') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  span.catnav
    router-link(to='/branding/slekhair') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/zedgirl') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Learn & Explore',
    type: 'Logo Design',
    synopsis: 'Logotype created for Learn & Explore, an early childhood daycare center of excellence.',
    image: {
      path1: '/assets/branding/learn&explore/01.jpg',
      path2: '/assets/branding/learn&explore/02.jpg',
      path3: '/assets/branding/learn&explore/03.jpg'
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
    background-image url("/assets/branding/learn&explore/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/learn&explore/02.jpg");
  &:nth-of-type(3)
    height 1200px
    background-image url("/assets/branding/learn&explore/03.jpg");
</style>