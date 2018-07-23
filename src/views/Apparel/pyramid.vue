<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/nycmap') past project
    router-link(to='/apparel') apparel
    router-link(to='/apparel/moody') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  .image
  span.catnav
    router-link(to='/apparel/nycmap') past project
    router-link(to='/apparel') apparel
    router-link(to='/apparel/moody') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Distressed Pyramid',
    type: 'Apparel Graphic.',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Kigi Life. Done in a distressed ink graphic style.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    background-image url("/apparel/pyramid/01.jpg");
  &:nth-of-type(2)
    background-image url("/apparel/pyramid/02.jpg");
  &:nth-of-type(3)
    background-image url("/apparel/pyramid/03.jpg");
  &:nth-of-type(4)
    background-image url("/apparel/pyramid/04.jpg");

</style>