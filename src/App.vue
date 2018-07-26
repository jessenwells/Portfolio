<template lang="pug">
  #app
    Intro
    Header
    content
      transition(name="fade")
        router-view
</template>

<script>
import Header from './components/Header'
import Intro from './components/Intro'
export default {
  components: {
    Header,
    Intro
  },
  created() {
    let codepenScript = document.createElement('script')
    codepenScript.setAttribute('src', 'http://assets.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
    codepenScript.async = true
    //
    let drawsvgScript = document.createElement('script')
    drawsvgScript.setAttribute('src', 'http://jessewells.com/vendor/drawSvg.js')
    document.body.appendChild(drawsvgScript)
    drawsvgScript.async = true
  }
}
</script>

<style lang="stylus">
@import url('http://fonts.googleapis.com/css?family=Quicksand:400,700|Open+Sans+Condensed:300|Varela+Round')
@import "assets/mq"
body
  margin 0
  background #f3f3f3
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
    min-width 500px
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
    .image
      width 100%
      background-repeat no-repeat
    .details
        margin-bottom 5px
        h3
            font-size 1.5em
            color #415a64
            line-height 1.2
        p:first-of-type
            color #52717f
            font-style italic
            margin-bottom 40px
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
        &:last-child
            margin-top 1em
        &:before
            content ''
            display block
            float left
            background-image url('/chevron-left.svg')
            background-repeat no-repeat
            width 22px
            height 16px
            opacity 0.5
        &:after
            content ''
            display block
            float left
            background-image url('/chevron-right.svg')
            background-repeat no-repeat
            width 22px
            height 16px
            margin-right -6px
            margin-left 5px
            opacity 0.5
        a
            color #9aadb5
            display block
            text-decoration none
            text-transform uppercase
            transition all 0.2s ease
            &:nth-child(1)
                flex 2.5
                text-align left
                opacity 0.5
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
            &:nth-child(3)
                flex 2.5
                text-align right
                opacity 0.5
                &:hover
                    opacity 1
    div
        position relative
        border-radius 8px
        overflow hidden
        margin-bottom 20px

//nav transition
.fade-enter-active
    transition-property opacity
    transition-duration .25s
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

.cp_embed_wrapper
  width 100%
</style>
