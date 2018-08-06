<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/pyramid') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycliberty') next project
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
    router-link(to='/apparel/pyramid') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycliberty') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Moody Line Art',
    type: 'Apparel Graphic',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Moody Guitar Straps. Done in a continuous line art style. Two color separation.',
    image: {
      path1: '/assets/apparel/moody/01.jpg',
      path2: '/assets/apparel/moody/02.jpg',
      path3: '/assets/apparel/moody/03.jpg',
      path4: '/assets/apparel/moody/04.jpg',
      path5: '/assets/apparel/moody/05.jpg'
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
    background-image url("/assets/apparel/moody/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/apparel/moody/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/apparel/moody/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/apparel/moody/04.jpg");
  &:nth-of-type(5)
    background-image url("/assets/apparel/moody/05.jpg");
</style>