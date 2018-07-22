<template lang="pug">
header
  nav
    template(v-for="view in views")
        router-link(:to="view.link" class='link') {{ view.title }}
          .navselect
            svg#select(:class='view.title' viewBox='0 0 225 25' preserveAspectRatio="xMidYMin slice")
              path.dot(:class='view.title' d='M125,12.5c0,6.9-5.6,12.5-12.4,12.5c0,0-30,0-30.1,0c0,0,30,0,30,0c-6.9,0-12.5-5.6-12.5-12.5S105.6,0,112.5,0 c0,0-30,0-30,0c0,0,30,0,30.1,0C119.4,0,125,5.6,125,12.5z')

</template>

<script>
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
      margin-top -18px
      text-align center
      opacity 0
      transition opacity 0.5s ease
    svg#select
      height 5px
      position relative
      overflow visible
      path
        fill #b6c8ce

  display flex
  justify-content flex-end
  margin-right 8em
  .link
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
    &:hover
      color #1f2b30
</style>
