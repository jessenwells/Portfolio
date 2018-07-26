<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/pyramid') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/nycliberty') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  .image
  .image
  .image
  .image
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
    type: 'Apparel Graphic.',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Moody Guitar Straps. Done in a continuous line art style. Two color separation.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    background-image url("/apparel/moody/01.jpg");
  &:nth-of-type(2)
    background-image url("/apparel/moody/02.jpg");
  &:nth-of-type(3)
    background-image url("/apparel/moody/03.jpg");
  &:nth-of-type(4)
    background-image url("/apparel/moody/04.jpg");
  &:nth-of-type(5)
    background-image url("/apparel/moody/05.jpg");
</style>