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
      v-for="(square, index) in getCards",
      :key="index",
      :color="square.color",
      :name="square.name",
      v-if="loaded"
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Square from './Square'

export default {
  data () {
    return {
      loaded: false
    }
  },
  components: {
    Square
  },
  computed: {
    ...mapGetters('waicolormemory', ['getCards'])
  },
  methods: {
    ...mapActions('waicolormemory', ['fecthCards'])
  },
  created () {
    this.$store.dispatch('waicolormemory/fecthCards').then(() => {
      console.log('foi')
      this.loaded = true
    })
  }

}
</script>

<style lang="sass" scoped>
@import ../assets/sass/import/_extend

.grid
  +flex(row, w, center, flex-start)
  margin-right: auto
  margin-left: auto
  width: 100%
  perspective: 1000px
  +media-min(620px)
    width: $pixel * 59
</style>
