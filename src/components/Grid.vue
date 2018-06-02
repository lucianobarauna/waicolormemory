<template lang="pug">
  .grid
    h1 Grid
    Square
</template>

<script>
import Square from './Square'
export default {
  components: {
    Square
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/import/_extend
.grid
</style>
