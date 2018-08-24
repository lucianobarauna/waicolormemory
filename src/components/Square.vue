<template lang="pug">
  .square(
    :class="[getOpened, getSelected]"
    :style="{ backgroundColor: color }"
  )
    span {{name}}
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      default () {
        return '#000000'
      }
    },
    name: {
      type: String,
      required: true,
      default () {
        return 'preto'
      }
    },
    selected: {
      type: Boolean,
      required: true,
      default () {
        return false
      }
    },
    opened: {
      type: Boolean,
      required: true,
      default () {
        return false
      }
    }
  },
  computed: {
    getSelected () {
      if (this.selected) {
        return 'selected'
      }
    },
    getOpened () {
      if (this.opened) {
        return 'opened'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/import/_extend
.square
  width: $pixel * 10
  height: $pixel * 10
  background-color: red
  border-radius: $pixel
  opacity: .5
  &.selected
    opacity: 1
  &.opened
    transform: scale(1.5)

</style>
