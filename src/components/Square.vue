<template lang="pug">
  //- .square(
  //-   :class="[getOpened, getSelected]"
  //-   :style="{ backgroundColor: color }"
  //- )
  .card
    .card-front Frente
      //- span {{name}}
    .card-back(
      :style="{ backgroundColor: color }"
    ) verso

</template>

<script>
export default {
  props: {
    color: {
      // type: String,
      // required: true,
      // default () {
      //   return '#000000'
      // }
    },
    name: {
      // type: String,
      // required: true,
      // default () {
      //   return 'preto'
      // }
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
.card
  position: relative
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
    border: solid ($pixel / 2) white
  &-front
    z-index: 2
    background-size: cover
    background-image: url('../assets/img/flat-mountains.svg')
    transform: rotateY(0deg)
  &-back
    transform: rotateY(180deg)
  &:hover,
  &:active
    transform: rotateY(180deg)
  &.selected
    // quando ficar selecionado fazer alguma coisa aqui
  &.opened
    transform: scale(1.5)

</style>
