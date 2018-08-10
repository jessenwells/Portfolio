<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/apparel/crown') past project
    router-link(to='/apparel') view apparel
    router-link#next(to='/apparel/pyramid') next project
  .image(:data-src='image.path1')
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image(:data-src='image.path2')
  .image(:data-src='image.path3')
  .image(:data-src='image.path4')
  span.catnav
    router-link(to='/apparel/crown') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/pyramid') next project
</template>

<script>
export default {
data() {
  return {
    project: 'NYC Tourism',
    type: 'Apparel Graphic',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Fashion Planet. Showing Manhattan neighborhoods in a hand drawn typographical layout.',
    image: {
      path1: '/assets/apparel/nycmap/01.jpg',
      path2: '/assets/apparel/nycmap/02.jpg',
      path3: '/assets/apparel/nycmap/03.jpg',
      path4: '/assets/apparel/nycmap/04.jpg'
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
    background-image url("/assets/apparel/nycmap/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/apparel/nycmap/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/apparel/nycmap/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/apparel/nycmap/04.jpg");
</style>