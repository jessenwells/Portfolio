<template lang="pug">
header
  nav
    template(v-for="view in views")
        router-link(:to="view.link") {{ view.title }}
</template>

<script>
  export default {
    data () {
      return {
        views: [
          {title: 'Logo', link: '/'},
          {title: 'Branding', link: '/branding'},
          {title: 'Web', link: '/web'},
          {title: 'Apparel', link: '/apparel'},
          {title: 'Playground', link: '/playground'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
header
  width 100%
  height 100px
  background tomato
  line-height 100px
  margin-bottom 10px
  nav
     display flex
     padding 0 2em
     font-size 1.15em
     text-transform uppercase
     a
       color lightcyan
       margin-left 1em
       &:first-child
         margin-right auto
         margin-left 0
</style>
