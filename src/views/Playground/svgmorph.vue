<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/playground/svgdrawpath') past project
    a(href='http://codepen.io/jessenwells/live/WvORge' target='_blank' class="link") view full page
    router-link(to='/playground/cssdrawpath') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="WvORge" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="WvORge" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/playground/svgdrawpath') past project
    a(href='http://codepen.io/jessenwells/live/WvORge' target='_blank' class="link") view full page
    router-link(to='/playground/cssdrawpath') next project
</template>

<script>
export default {
  data() {
  return {
    project: 'SVG Star Transformation',
    type: 'Web Animation.',
    synopsis: 'SVG Morphing animation of a transforming star. The points on the path are individually animated with elastic easing functions using Gsap and Snap.svg'
  }
  }
}
</script>

<style lang='stylus' scoped>

</style>