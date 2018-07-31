<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/playground/sasscolor') past project
    router-link(to='/branding') view branding
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
    router-link(to='/branding') view branding
    router-link(to='/branding/kigilove') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Music Militia Identity',
    synopsis: 'Corporate Identity created for The Music Militia, an internet radio service for new and aspiring artists. Logotype inspiration from a military badge.'
  }
},
  metaInfo() {
    return {
      title: this.type
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