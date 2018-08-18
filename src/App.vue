<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<style lang="sass">
@import ./assets/sass/Memory
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
