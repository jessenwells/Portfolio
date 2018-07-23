<template lang='pug'>
#single-page
  span.catnav
    router-link(to='/apparel/nycliberty') past project
    a(href='http://codepen.io/jessenwells/live/JdLoGP' target='_blank' class="link") view full page
    router-link(to='/playground/3dparallax') next project
  span(data-height="780" data-theme-id="16807" data-slug-hash="JdLoGP" data-default-tab="result" data-user="jessenwells" class="codepen")
  .details
    h3 {{ project }}
    p {{ type }}
    p {{ synopsis }}
  span(data-height="780" data-theme-id="16808" data-slug-hash="JdLoGP" data-default-tab="html" data-user="jessenwells" class="codepen")
  span.catnav
    router-link(to='/apparel/nycliberty') past project
    a(href='http://codepen.io/jessenwells/live/JdLoGP' target='_blank' class="link") view full page
    router-link(to='/playground/3dparallax') next project
</template>

<script>
export default {
  data() {
  return {
    project: 'SVG Melting Rocket Pop',
    type: 'Web Animation.',
    synopsis: 'Melting animation including inline SVG paths and gradients animated using Green Sock Gsap and Snap.svg'
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