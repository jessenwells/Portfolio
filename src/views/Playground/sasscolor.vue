<template lang='pug'>
#single-page
  span.catnav
    router-link#past(to='/playground/cssdrawpath') past project
    a(href='http://codepen.io/jessenwells/live/pJvyRm' target='_blank' class="link") view full page
    router-link#next(to='/branding/musicmilitia') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="pJvyRm" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="pJvyRm" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/playground/cssdrawpath') past project
    a(href='http://codepen.io/jessenwells/live/pJvyRm' target='_blank' class="link") view full page
    router-link(to='/branding/musicmilitia') next project
</template>

<script>
export default {
  data() {
  return {
    project: 'Sass Color Palette',
    type: 'Web Animation',
    synopsis: 'Color Palette created using Sass mixins and color directives to blend and adjust HEX values.',
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