import React, { PureComponent, PropTypes } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="margin-center max-width-500">
          <section className="tic-tac-toe">
          </section>
        </div>
      </div>
    );
  }
}*/

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    store.dispatch({
      type: 'PLAYED',
      text: 'Read the docs'
    });
    this.dispatch();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="margin-center max-width-500">
          {[...Array(10)].map((x, i) =>
            <TicTacToe onClick={this.onClick} />
          )}
        </div>
        <div class="confirmation">
          Done!
        </div>
      </div>
    );
  }
}


class TicTacToe extends PureComponent {
  
  render() {
    let section = '';
    if(this.props.selected === 'x') {
      section = <Cross />;
    } else if(this.props.selected === 'o') {
      section = <Circle />;
    }
    return (
      <section className="tic-tac-toe" onClick={this.onClick}>
        {section}
      </section>
    )
  }
}

TicTacToe.propTypes  = {
  selected : PropTypes.oneOf(['x','o']),
}

const Cross = () => 
(
  <div className="cross">
    <span id="x">
      X
    </span>
  </div>
);

const Circle = () => 
(
  <div className="circle">
  </div>
);

/*const mapDispatchToProps = (dispatch) => {
  return {
    playerd: () => dispatch(updateImageAction()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);*/

const mapStateToProps = state =>  {
  return {
    player: state.player,
  };
}

// The default export is now the "connected" component
// You'll be provided the dispatch method as a prop
export default connect(mapStateToProps)(App);