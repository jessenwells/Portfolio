<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/playground/3dparallax') past project
    a(href='http://codepen.io/jessenwells/live/pJrJjp' target='_blank' class="link") view full page
    router-link#next(to='/playground/svgmorph') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="pJrJjp" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="pJrJjp" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/playground/3dparallax') past project
    a(href='http://codepen.io/jessenwells/live/pJrJjp' target='_blank' class="link") view full page
    router-link(to='/playground/svgmorph') next project
</template>

<script>
export default {
  data() {
  return {
    project: 'SVG Unknown Pleasures',
    type: 'Web Animation',
    synopsis: 'SVG Path animation based on the album artwork of Joy Division. Inline SVG paths are drawn one after the other using Gsap timeline and Draw.svg',
    past: '',
    next: ''
  }
  },
  metaInfo() {
    return {
      title: this.type
      }
    },
  beforeCreate() {
    let codepenScript = document.createElement('script')
    codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
    codepenScript.async = true
  }
}
</script>

<style lang='stylus' scoped>

</style>