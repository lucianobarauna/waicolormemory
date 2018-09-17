import axios from 'axios'

const actions = {
  fecthCards ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get('http://localhost:8081/json/cards.json')
          .then(response => {
            commit('SET_CARDS', response.data.cards)
            resolve()
          }).catch(e => {
            console.log(e)
          })
      }, 1000)
    })
  }
}

export default actions
