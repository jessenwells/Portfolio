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
@require 'main.styl'
</style>
