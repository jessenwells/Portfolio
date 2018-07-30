<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/moody') past project
    router-link(to='/apparel') view apparel
    router-link(to='/playground/svgmelt') next project
  .image
  span.details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }} 
  .image
  .image
  .image
  span.catnav
    router-link(to='/apparel/moody') past project
    router-link(to='/apparel') view apparel
    router-link(to='/playground/svgmelt') next project
</template>

<script>
export default {
data() {
  return {
    project: 'NYC Tourism',
    type: 'Apparel Graphic.',
    synopsis: 'T-shirt Graphic designed for silkscreen printing created for Fashion Planet. Showing the Statue of Liberty in a rough pastel graphic style. Three color separation.'
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
    background-image url("/apparel/nycliberty/01.jpg");
  &:nth-of-type(2)
    background-image url("/apparel/nycliberty/02.jpg");
  &:nth-of-type(3)
    background-image url("/apparel/nycliberty/03.jpg");
  &:nth-of-type(4)
    background-image url("/apparel/nycliberty/04.jpg");
</style>