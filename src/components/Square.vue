<template lang="pug">
  //- .square(0,,
  //-   :class="[getOpened, getSelected]"
  //-   :style="{ backgroundColor: color }"
  //- )
  .card
    .card-front
    .card-back(
      :style="{ backgroundColor: color }"
    )
     span.card-name {{name}}

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
      required: true
    },
    selected: {
      // type: Boolean,
      // required: true,
      // default () {
      //   return false
      // }
    },
    opened: {
      // type: Boolean,
      // required: true,
      // default () {
      //   return false
      // }
    }
  },
  computed: {
    // getSelected () {
    //   if (this.selected) {
    //     return 'selected'
    //   }
    // },
    // getOpened () {
    //   if (this.opened) {
    //     return 'opened'
    //   }
    // }
  }
}
</script>

<style lang="sass" scoped>
@import ../assets/sass/import/_extend

%flap-card
  position: absolute
  bottom: -20px
  width: 100%
  height: $pixel * 4
  border-radius: 0 0 $pixel $pixel
  background-color: white

.card
  position: relative
  margin: ($pixel * 2) $pixel
  width: $vw * 4
  height: $vw * 4
  +media-min(620px)
    width: $pixel * 15
    height: $pixel * 15
  transform-style: preserve-3d
  transition: .6s
  // opacity: .5 efeito anterior para simular a ação de selecionado
  &-front,
  &-back
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: $pixel
    backface-visibility: hidden
    box-shadow: inset 0 0 0 ($pixel / 2) white
  &-front
    z-index: 2
    background-size: cover
    background-image: url('../assets/img/flat-mountains.svg')
    transform: rotateY(0deg)
    &::after
      content: ''
      @extend %flap-card
  &-back
    transform: rotateY(180deg)
  &:hover,
  &:active
    transform: rotateY(180deg)
  &.selected
    // quando ficar selecionado fazer alguma coisa aqui
  &.opened
    transform: scale(1.5)
  &-name
    @extend %flap-card
    +flex(row, w, center, center)

</style>
