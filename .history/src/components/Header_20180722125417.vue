<template lang="pug">
header
  a(href="" target="_blank")
    #badge view site code<br> on github
  nav
    template(v-for="view in views")
        router-link(:to="view.link" class='link') {{ view.title }}
          .navselect
            svg#select(:class='view.title' viewBox='0 0 225 25' preserveAspectRatio="xMidYMin slice")
              path.dot(:class='view.title' d='M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z')

</template>

<script>
import Snap from 'snapsvg'
  export default {
    data () {
      return {
        views: [
          {title: 'branding', link: '/branding'},
          {title: 'web', link: '/web'},
          {title: 'apparel', link: '/apparel'},
          {title: 'playground', link: '/playground'}
        ]
      }
    },
    mounted() {
    var navSvg = document.getElementById('select')
    var svg = Snap(navSvg)
    

    function active() {
      navSvg.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
    };
    function inactive() {
      navSvg.animate({ d: "M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z"}, 800, mina.ease);
    };
active()
    }
  }
</script>

<style lang="stylus">
header
  margin 1em 6em 7em 6em
  min-width 500px
  opacity 0
  nav
    display flex
    justify-content flex-end
    margin-right 8em
    a.link
      display block
      color #1f2b30
      margin 0
      font-family 'Varela Round', sans-serif
      font-size 15px
      text-transform uppercase
      text-align center
      color lighten(#1f2b30,12%)
      padding 0px 8px 4px 8px
      line-height 32px
      font-weight 600
      letter-spacing 0.05em
      transition color 0.35s ease
    &:hover .navselect
      opacity 1
    .navselect
      height 0
      width 60px
      margin -18px auto 0 auto
      text-align center
      opacity 0
      transition opacity 0.5s ease
    svg#select
      height 5px
      position relative
      overflow visible
      path
        fill #b6c8ce
  #badge
    width 300px
    height 40px
    background #9aadb5
    text-align center
    transform rotate(45deg)
    position absolute
    opacity 0
    right -300px
    top 35px
    font-family 'Varela Round', sans-serif
    font-size 15px
    text-transform uppercase
    color lighten(#ced9dd,2%)
    line-height 1.3
    font-weight 600
    letter-spacing 0.05em
    padding-top 4px
    border-bottom 1px solid darken(#9aadb5,10%)
    box-shadow 2px 2px 3px rgba(31,43,48,0.35)
</style>
