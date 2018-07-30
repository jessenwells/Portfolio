<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/musicmilitia') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/slekhair') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }}
  .image
  .image
  .image
  span.catnav
    router-link(to='/branding/musicmilitia') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/slekhair') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Kigi Love Identity',
    synopsis: 'Corporate Identity created for Kigi Love, a social community whose mission is to empower a love based society through education, publication, and cultivation.'
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
  height 500px
  &:nth-of-type(1)
    background-image url("/branding/kigilove/01.jpg");
  &:nth-of-type(2)
    background-image url("/branding/kigilove/02.jpg");
  &:nth-of-type(3)
    background-image url("/branding/kigilove/03.jpg");
  &:nth-of-type(4)
    background-image url("/branding/kigilove/04.jpg");
@media (max-width: 900px)
  .image
    width 100%
    background-size contain
    background-position 50%
</style>