import axios from 'axios'

const actions = {
  fecthCards ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.get('http://localhost:8080/json/cards.json')
          .then(response => {
            var cards = response.data.cards
            var randomCards = cards[3]
            // console.log(cards)
            console.log('randomCards', randomCards)
            commit('SET_CARDS', cards)
            resolve()
          }).catch(e => {
            console.log(e)
          })
      }, 1000)
    })
  }
}

export default actions
