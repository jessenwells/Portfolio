<template lang="pug">
  #app
    Header
    Content
      transition(name="fade")
        router-view
    Footer
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
html
  overflow-y:scroll
body
  margin 0
  background #f3f3f3
a
  text-decoration none
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
#tile-grid
  width 80%
  max-width 1200px
  min-width 550px
  margin 0 auto
  padding 2% 0
  color #f3f3f3
  font-size 2em
  display flex
  justify-content center
  flex-flow row wrap
@require 'main.styl'
</style>
