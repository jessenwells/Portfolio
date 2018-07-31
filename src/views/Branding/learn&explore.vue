<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/slekhair') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/zedgirl') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }}
  .image
  .image
  span.catnav
    router-link(to='/branding/slekhair') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/zedgirl') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Learn & Explore Logo',
    synopsis: 'Logotype created for Learn & Explore, an early childhood daycare center of excellence.'
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
    background-image url("/assets/branding/learn&explore/01.jpg");
  &:nth-of-type(2)
    background-image url("/assets/branding/learn&explore/02.jpg");
  &:nth-of-type(3)
    height 1200px
    background-image url("/assets/branding/learn&explore/03.jpg");
</style>