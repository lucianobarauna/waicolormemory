<template lang="pug">
  //- @click.native é um evento que só vive dentro do grid e não é passado para square
  .grid
    //- Square(
    //-   v-for="(square, index) in squares",
    //-   :key="index",
    //-   :color="square.color",
    //-   :name="square.name",
    //-   :selected="isSelected(index)",
    //-   :opened="isOpened(index)"
    //- )
    Square(
      v-for="(square, index) in getSquares",
      :key="index",
      :color="square.color",
      :name="square.name",
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Square from './Square'

export default {
  components: {
    Square
  },
  computed: {
    ...mapGetters('waicolormemory', ['getSquares'])
  },
  methods: {
    ...mapActions('waicolormemory', ['fecthCards'])
  },
  created () {
    this.fecthCards()
  }

}
</script>

<style lang="sass" scoped>
@import ../assets/sass/import/_extend

.grid
  +flex(row, w, flex-start, flex-start)
  margin-right: auto
  margin-left: auto
  width: $pixel * 40
  height: $pixel * 40
</style>
