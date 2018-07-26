<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/nycskyline') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycmap') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  span.catnav
    router-link(to='/apparel/nycskyline') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycmap') next project
</template>

<script>
export default {
data() {
  return {
    project: 'Relief Style Crown',
    type: 'Apparel Graphic.',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Kigi Life. Done in a hand carved relief print graphic style. Two color separation.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    background-image url("/apparel/crown/01.jpg");
  &:nth-of-type(2)
    background-image url("/apparel/crown/02.jpg");
  &:nth-of-type(3)
    background-image url("/apparel/crown/03.jpg");
</style>