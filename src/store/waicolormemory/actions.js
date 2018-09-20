import axios from 'axios'

const actions = {
  fecthCards ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get('http://localhost:8080/json/cards.json')
          .then(response => {
            // Duplicated itens
            let cards = [...response.data.cards, ...response.data.cards]
            let shuffleCards = cards.sort(() => 0.5 - Math.random())
            commit('SET_CARDS', shuffleCards)
            resolve()
          }).catch(e => {
            console.log(e)
          })
      }, 1000)
    })
  }
}

export default actions
