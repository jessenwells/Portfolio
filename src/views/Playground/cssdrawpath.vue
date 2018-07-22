<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/playground/svgmorph') past project
    a playground
    router-link(to='/playground/sasscolor') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="WvRZYe" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="WvRZYe" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/playground/svgmorph') past project
    a playground
    router-link(to='/playground/sasscolor') next project
</template>

<script>
export default {
  data() {
  return {
    project: 'SVG Badge Logo',
    type: 'Web Animation.',
    synopsis: 'SVG Path animation based on artwork by Daniel Burka. Inline SVG paths are drawn using CSS keyframe animation with the stroke-dashoffset property and text is set on a circle using Lettering.js'
  }
  },
  
  created() {
    let codepenScript = document.createElement('script')
    codepenScript.setAttribute('src', '//assets.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
    codepenScript.async = true
  }
}
</script>

<style lang='stylus' scoped>
#single-page
  position relative
  width 100%
  max-width 780px
</style>