<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/learn&explore') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/rnr') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }}
  .image
  .image
  .image
  span.catnav
    router-link(to='/branding/learn&explore') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/rnr') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Zed Girl Logo',
    synopsis: 'Logotype created for Zed Girl, makeup and beauty products.'
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
    background-image url("/assets/branding/zedgirl/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/zedgirl/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/zedgirl/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/zedgirl/04.jpg");
</style>