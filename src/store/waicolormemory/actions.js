import axios from 'axios'

const actions = {
  fecthCards ({ commit }) {
    axios.get('http://localhost:8080/json/cards.json', {
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setTimeout(() => {
          commit('SET_CARDS', response.data.cards)
        }, 1000)
      }).catch(e => {
        console.log(e)
      })
  }
}

export default actions
