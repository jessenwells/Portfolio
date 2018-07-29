<template lang="pug">
header
  a(href="https://github.com/jessenwells/Portfolio" target="_blank")
    #badge view site code<br> on github
  nav
    template(v-for="view in views")
        router-link(:to="view.link" class='link' :class='view.title') {{ view.title }}
          .navselect
            svg#select(:class='view.title' viewBox='0 0 225 25')
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
    methods: {
      active: function() {
        var svg1 = Snap('#select.branding')
        var svg2 = Snap('#select.web')
        var svg3 = Snap('#select.apparel')
        var svg4 = Snap('#select.playground')
        var link1 = document.querySelector('.link.branding')
        var link2 = document.querySelector('.link.web')
        var link3 = document.querySelector('.link.apparel')
        var link4 = document.querySelector('.link.playground')
        var dot1 = svg1.select('.dot.branding')
        var dot2 = svg2.select('.dot.web')
        var dot3 = svg3.select('.dot.apparel')
        var dot4 = svg4.select('.dot.playground')

        if ($(link1).hasClass('active')) {
          dot1.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
          $('.link .dot.branding').css('opacity','1');
        }
        else {
          dot1.animate({ d: "M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z"}, 400, mina.ease);
          $('.link .dot.branding').css('opacity','0');
        }
        if ($(link2).hasClass('active')) {
          dot2.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
          $('.link .dot.web').css('opacity','1');
        }
        else {
          dot2.animate({ d: "M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z"}, 400, mina.ease);
          $('.link .dot.web').css('opacity','0');
        }
         if ($(link3).hasClass('active')) {
          dot3.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
          $('.link .dot.apparel').css('opacity','1');
        }
        else {
          dot3.animate({ d: "M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z"}, 400, mina.ease);
          $('.link .dot.apparel').css('opacity','0');
        } 
        if ($(link4).hasClass('active')) {
          dot4.animate({ d: "M224,12.5c0,6.9-4.6,12.5-11.4,12.5c0,0-130,0-130.1,0c0,0-70,0-70,0C5.6,25,1,19.4,1,12.5S5.6,0,12.5,0c0,0,70,0,70,0 c0,0,130,0,130.1,0C219.4,0,224,5.6,224,12.5z"}, 800, mina.bounce);
          $('.link .dot.playground').css('opacity','1');
        }
        else {
          dot4.animate({ d: "M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z"}, 400, mina.ease);
          $('.link .dot.playground').css('opacity','0');
        } 
      }
    },
    watch:{
    $route (to, from){
        setTimeout(this.active, 50);
    }
} 
  }
</script>

<style lang="stylus">
@import "../assets/mq"
header
  margin 1em 6em 5em 6em 
  min-width 320px
  opacity 0
  +below(900px)
    margin 11.5em 0 0 0
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
    +below(750px)
      display none
  nav
    display flex
    justify-content flex-end
    margin-right 8em
    +below(900px)
      margin-right 0
      justify-content center
      margin-bottom -1.25em
    .link
      display block
      color #1f2b30
      margin 0
      font-family 'Varela Round', sans-serif
      font-size 15px
      text-transform uppercase
      text-align center
      padding 0px 8px 4px 8px
      height 60px
      line-height 35px
      font-weight 600
      letter-spacing 0.05em
      transition color 0.35s ease
      &:hover .dot
        opacity 1 !important
      +below(750px)
        font-size 19px
        padding 0px 4px 4px 4px
      +below(350px)
        padding 0px 2px 4px 2px
      .navselect
        height 0
        width 60px
        margin -18px auto 0 auto
        text-align center
        transition opacity 0.5s ease
        +below(650px)
          width 35px
      svg#select
        height 5px
        position relative
        overflow visible
        path
          fill #b6c8ce
      .dot
        &.branding, &.web, &.apparel, &.playground
          transition opacity 0.5s ease
          opacity 0
</style>
