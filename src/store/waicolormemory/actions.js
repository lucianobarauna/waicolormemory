import axios from 'axios'

const actions = {
  fecthCards ({ commit }) {
    axios.get('http://localhost:8080/json/cards.json')
      .then(response => {
        commit('SET_CARDS', response.data.cards)
      }).catch(e => {
        console.log(e)
      })
  }
}

export default actions
