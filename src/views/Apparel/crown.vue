<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/apparel/nycskyline') past project
    router-link(to='/apparel') view apparel
    router-link#next(to='/apparel/nycmap') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  span.catnav
    router-link(to='/apparel/nycskyline') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycmap') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Relief Style Crown',
    type: 'Apparel Graphic',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Kigi Life. Done in a hand carved relief print graphic style. Two color separation.',
    image: {
      path1: '/assets/apparel/crown/01.jpg',
      path2: '/assets/apparel/crown/02.jpg',
      path3: '/assets/apparel/crown/03.jpg'
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
    background-image url("/assets/apparel/crown/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/apparel/crown/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/apparel/crown/03.jpg");
</style>