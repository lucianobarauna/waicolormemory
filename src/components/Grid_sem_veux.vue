<template lang="pug">
  //- @click.native é um evento que só vive dentro do grid e não é passado para square
  .grid
    Square(
      v-for="(square, index) in squares",
      @click.native="setSelected(index)",
      :key="index",
      :color="square.color",
      :name="square.name",
      :selected="isSelected(index)",
      :opened="isOpened(index)"
    )
</template>

<script>
import Square from './Square'

export default {
  components: {
    Square
  },
  data: () => ({
    selected: [],
    squares: [
      {
        color: '#ff0000',
        name: 'cinza'
      },
      {
        color: '#ffff00',
        name: 'cinza'
      },
      {
        color: '#ff00ff',
        name: 'cinza'
      },
      {
        color: '#000000',
        name: 'cinza'
      },
      {
        color: '#baf0ba',
        name: 'cinza'
      },
      {
        color: '#babaca',
        name: 'cinza'
      },
      {
        color: '#064a0b',
        name: 'cinza'
      },
      {
        color: '#16a8d6',
        name: 'cinza'
      }
    ]
  }),
  created () {
    this.squares = this.setSquares(this.squares)
  },
  methods: {
    setSquares (squares) {
      return [
        ...squares.sort(() => Math.random() - 0.5),
        ...squares.sort(() => Math.random() - 0.5)
      ].sort(() => Math.random() - 0.5)
    },
    setSelected (id) {
      if (this.selected.length < 2) {
        this.selected.push(id)
      } else {
        this.selected = []
        this.selected.push(id)
      }
    },
    isSelected (id) {
      if (this.selected.indexOf(id) !== -1) {
        return true
      }
      return false
    },
    isOpened (id) {
      if (this.selected.indexOf(id) !== -1 &&
          this.selected.length === 2) {
        return true
      }
      return false
    }
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
