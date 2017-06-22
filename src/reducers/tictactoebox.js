export default function tictactoebox(state = undefined, action = {}) {
  switch (action.type) {
    
    case 'PLAYED': {
      let player = 1;
      if(this.state.player === 1) {
        player = 2;
      }
      this.setState({...state, {box: {...state.box,  }})
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];  
    } 
    default:
      return {player: 1};
  }
}