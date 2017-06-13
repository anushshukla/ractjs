export default function currentPlayer(state = undefined, action = {}) {
  switch (action.type) {
    let player = 1;
    if(this.state.player === 1) {
      player = 2;
    }
    this.setState({...state,player})
    case PLAYED:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });   
    default:
      return state
  }
}