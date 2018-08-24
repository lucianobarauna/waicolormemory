const actions = {
  fetchSquares ({state, commit}) {
    let squares = [
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
    commit('setSquares', squares)
  }
}

export default actions
