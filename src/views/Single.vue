<template lang='pug'>
#single-page
  p(:id='proj') {{proj}} | {{passed}}
  #img(:style="image")
</template>

<script>
export default {
  props: ['proj'],
  data () {
    return {
      passed: 'passed',
      other: 'passed string',
      image: { backgroundImage: 'url(/branding/images/' + this.proj + '/01.jpg)' },
      kigilove: []
    }
  },
  watch: {

  },
  mounted() {
    if( this.proj === 'kigilove' ){this.passed = this.other}
  }
}
</script>

<style lang='stylus'>
p
  width 100%
#img
  width 780px
  height 500px
  background-size contain !important
</style>