<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/playground/svgmelt') past project
    a(href='http://codepen.io/jessenwells/live/Pqwegj' target='_blank' class="link") view full page
    router-link(to='/playground/svgdrawpath') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="Pqwegj" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="Pqwegj" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/playground/svgmelt') past project
    a(href='http://codepen.io/jessenwells/live/Pqwegj' target='_blank' class="link") view full page
    router-link(to='/playground/svgdrawpath') next project
</template>

<script>

export default {
  data() {
  return {
    project: '3D Parallax Paper Mask',
    type: 'Web Animation.',
    synopsis: 'Mouse driven parallax using CSS Rotate3D and triggered by Jquery MouseMove.'
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