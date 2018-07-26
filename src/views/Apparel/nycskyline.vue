<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/web/veteranlite') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/crown') next project
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
    router-link(to='/web/veteranlite') past project
    router-link(to='/apparel') view apparel
    router-link(to='/apparel/crown') next project
</template>

<script>
export default {
data() {
  return {
    project: 'NYC Tourism',
    type: 'Apparel Graphic.',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Fashion Planet. Showing lights and reflection of the New York skyline at night. Three color separation.'
  }
}
}
</script>

<style lang='stylus' scoped>
.image
  height 780px
  &:nth-of-type(1)
    background-image url("/apparel/nycskyline/01.jpg");
  &:nth-of-type(2)
    background-image url("/apparel/nycskyline/02.jpg");
  &:nth-of-type(3)
    background-image url("/apparel/nycskyline/03.jpg");
  &:nth-of-type(4)
    background-image url("/apparel/nycskyline/04.jpg");
  &:nth-of-type(5)
    background-image url("/apparel/nycskyline/05.jpg");
</style>