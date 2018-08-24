import axios from 'axios'

const actions = {
  loadCards ({ commit }) {
    axios.get('http://localhost:8080/json/cards.json')
      .then(response => {
        commit('setSquares', response.data.cards)
      }).catch(e => {
        console.log(e)
      })
  }
}

export default actions
