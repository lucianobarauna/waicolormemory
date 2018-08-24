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
    p {{squares}}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Square from './Square'

export default {
  components: {
    Square
  },
  computed: {
    ...mapState('waicolormemory', {
      squares: state => state.squares
    })
  },
  methods: {
    ...mapActions('waicolormemory', ['loadCards'])
  },
  created () {
    this.loadCards()
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
