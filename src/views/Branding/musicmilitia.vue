<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/playground/sasscolor') past project
    a branding
    router-link(to='/branding/kigilove') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }} 
  .image
  .image
  .image
  .image
  .image
  span.catnav
    router-link(to='/playground/sasscolor') past project
    a branding
    router-link(to='/branding/kigilove') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Music Militia Identity',
    synopsis: 'Corporate Identity created for The Music Militia, an internet radio service for new and aspiring artists. Logotype inspiration from a military badge.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  &:nth-of-type(1)
    height 500px
    background-image url("/branding/musicmilitia/01.jpg");
  &:nth-of-type(2)
    background-image url("/branding/musicmilitia/02.jpg");
  &:nth-of-type(3)
    background-image url("/branding/musicmilitia/03.jpg");
  &:nth-of-type(4)
    background-image url("/branding/musicmilitia/04.jpg");
  &:nth-of-type(5)
    background-image url("/branding/musicmilitia/05.jpg");
  &:nth-of-type(6)
    background-image url("/branding/musicmilitia/06.jpg");
</style>