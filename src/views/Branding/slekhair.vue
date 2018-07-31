<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/kigilove') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/learn&explore') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }} 
  .image
  .image
  .image
  .image
  span.catnav
    router-link(to='/branding/kigilove') past project
    router-link(to='/branding') view branding
    router-link(to='/branding/learn&explore') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Slek Identity',
    synopsis: 'Corporate Identity created for Slek Hair, a hair & beauty maintenance movement, styling bar and online store with subscription based discount human hair and accessories.'
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
  &:nth-of-type(1)
    height 600px
    background-image url("/assets/branding/slekhair/01.jpg");
  &:nth-of-type(2)
    height 535px
    background-image url("/assets/branding/slekhair/02.jpg");
  &:nth-of-type(3)
    background-image url("/assets/branding/slekhair/03.jpg");
  &:nth-of-type(4)
    background-image url("/assets/branding/slekhair/04.jpg");
  &:nth-of-type(5)
    background-image url("/assets/branding/slekhair/05.jpg");
@media (max-width: 900px)
  .image
    width 100%
    background-size contain
    background-position 50%
</style>