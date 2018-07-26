<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/branding/zedgirl') past project
    router-link(to='/branding') view branding
    router-link(to='/web/slek') next project
  .image
  span.details
    h3 {{ project }}
    p {{ synopsis }}
  .image
  .image
  .image
  .image
  span.catnav
    router-link(to='/branding/zedgirl') past project
    router-link(to='/branding') view branding
    router-link(to='/web/slek') next project
</template>

<script>
export default {
data() {
  return {
    project: 'RNR Logos',
    synopsis: 'Logotypes created for RNR, RevelatioNoituloveR and RhythmNRace Music.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  &:nth-of-type(1)
    background-image url("/branding/rnr/01.jpg");
  &:nth-of-type(2)
    background-image url("/branding/rnr/02.jpg");
  &:nth-of-type(3)
    background-image url("/branding/rnr/03.jpg");
  &:nth-of-type(4)
    background-image url("/branding/rnr/04.jpg");
  &:nth-of-type(5)
    background-image url("/branding/rnr/05.jpg");
</style>