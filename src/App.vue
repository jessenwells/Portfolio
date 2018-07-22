<template lang="pug">
  #app
    Intro
    Header
    content
      transition(name="fade")
        router-view
    Footer
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
export default {
  components: {
    Header,
    Footer,
    Intro
  }
}
</script>

<style lang="stylus">
@import url('http://fonts.googleapis.com/css?family=Quicksand:400,700|Open+Sans+Condensed:300|Varela+Round')
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
  font-size 2em
  display flex
  justify-content center
  flex-flow row wrap
#single-page
  width 80%
  max-width 1200px
  min-width 550px
  margin 0 auto
  padding 2% 0
  font-size 2em
  display flex
  justify-content center
  flex-flow row wrap
@require 'main.styl'
</style>
