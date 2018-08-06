<template lang="pug">
  #app
    Intro
    Header
    content
      transition(name="fade")
        router-view
    .snackbar(v-text="mobileNote")
</template>

<script>
import Header from './components/Header'
import Intro from './components/Intro'
export default {
  components: {
    Header,
    Intro
  },
  metaInfo: {
      title: 'Portfolio',
      titleTemplate: 'Jesse Wells | %s | Designer + Developer | NYC'
    },
  data() {
    return {
        mobileNote: 'tap again to view project'
    }
}
}
</script>

<style lang="stylus">
@import url('http://fonts.googleapis.com/css?family=Quicksand:300,400,500,700|Open+Sans+Condensed:300|Varela+Round')
@import "assets/mq"
body
  margin 0
  background #f7f7f7
a
  text-decoration none
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  position absolute
  width 100%
  top 0
  bottom 0
  overflow-y scroll
  overflow-x hidden
content
    position absolute
    width 100%
    min-width 300px
    margin-bottom 80px
#tile-grid
    margin 0 auto
    padding 2% 0
    font-size 2em
    display flex
    justify-content center
    flex-flow row wrap
    width 98%
    max-width 1200px
    min-width 350px
    +below(500px)
        margin 0 auto
#single-page
    margin 0 auto
    padding 2% 0
    font-size 2em
    display flex
    justify-content center
    flex-flow row wrap
    width 90%
    max-width 780px
    font-family 'Varela Round', sans-serif
    font-size 1.2em
    color #1f2b30
    line-height 1.5
    +below(900px)
        width 580px
        font-size 1em
    +below(750px)
        width 480px
    .image
      width 100%
      background-repeat no-repeat
      +below(900px)
        width 580px
        height 580px
        background-size 580px
      +below(750px)
        width 480px
        height 480px
        background-size 480px
    .details
        width 100%
        margin-bottom 5px
        padding 0 0.5em
        h3
            font-size 1.5em
            color #415a64
            line-height 1.2
        p:first-of-type
            color #52717f
            font-style italic
            margin-bottom 40px
        +below(900px)
            width 580px
            font-size 1em
        +below(750px)
            width 480px
    .catnav
        position relative
        width 100%
        background #efefef
        height 2em
        display flex
        align-items center
        padding 0 0.5em
        border-radius 8px
        margin-bottom 2em
        +below(900px)
            margin-bottom 20px
        +below(750px)
            height 3.5em
        &:last-child
            margin-top 1em
        &:before
            content ''
            display block
            float left
            background-image url('/assets/_icons/chevron-left.svg')
            background-repeat no-repeat
            width 22px
            height 16px
            margin-top -1px
            opacity 0.65
        &:after
            content ''
            display block
            float left
            background-image url('/assets/_icons/chevron-right.svg')
            background-repeat no-repeat
            width 22px
            height 16px
            margin-right -6px
            margin-top -1px
            margin-left 5px
            opacity 0.65
        a
            color #9aadb5
            display block
            text-decoration none
            text-transform uppercase
            transition all 0.2s ease
            &:nth-child(1)
                flex 2.5
                text-align left
                opacity 0.65
                &:hover
                    opacity 1
            &:nth-child(2)
                flex 3
                text-align center
                border-left 2px solid #e2e8ea
                border-right 2px solid #e2e8ea
                background rgba(255, 255, 255,0.3)
                &:hover
                    color #52717f
                +below(750px)
                    line-height 2.75em
            &:nth-child(3)
                flex 2.5
                text-align right
                opacity 0.65
                &:hover
                    opacity 1
    div
        position relative
        border-radius 8px
        overflow hidden
        margin-bottom 20px
//mobile notification
.snackbar
    position fixed
    width 100%
    height 8%
    bottom -10%
    max-height 120px
    background #1f2b30
    color #fff
    display flex
    align-self center
    justify-content center
    align-items center
    font-size 1.35em
    font-family 'Quicksand', sans-serif
    font-weight 300
    letter-spacing 0.01em
    text-transform uppercase
    box-shadow 0px -4px 1px 0px rgba(31,43,48,0.3)
    transition ease all 0.4s
    z-index 10
    &.show
        bottom -1px
//nav transition
.fade-enter-active
    transition-property opacity
    transition-duration .45s
.fade-leave-active
    transition-property opacity
    transition-duration .35s
.fade-enter-active
    transition-delay .45s
.fade-enter, .fade-leave-active
    opacity 0
//frame animation

@keyframes sprite3
    100%
        background-position 0 -1050px
@keyframes sprite4
    100%
        background-position 0 -1400px
@keyframes sprite6
    100%
        background-position 0 -2100px

@keyframes sprite3lg
    100%
        background-position 0 -1350px
@keyframes sprite4lg 
    100%
        background-position 0 -1800px
@keyframes sprite6lg
    100%
        background-position 0 -2700px
.cp_embed_wrapper
  width 100%
  height 730px
.basicLightbox
    background rgba(247, 247, 247, 0.95) !important
</style>
