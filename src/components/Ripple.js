import React from 'react';
import PropTypes from 'prop-types';
import s from './styled';

class Ripple extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      translateX: 0,
      translateY: 0,
      animate: false
    }
    this.createRipple = this.createRipple.bind(this);
  }

  createRipple(event) {
    const ele = event.currentTarget;
    const height = ele.clientHeight;
    const width = ele.clientWidth;
    const left = event.pageX - ele.offsetLeft - (height/4);
    const top = event.pageY - ele.offsetTop - (height/4);
    console.log("Ripple Values Starts===============");
    console.log("Ripple Values: ele.offsetLeft:", ele.offsetLeft);
    console.log("Ripple Values: ele.offsetTop:", ele.offsetTop);
    console.log("Ripple Values: eventPageX:", event.pageX);
    console.log("Ripple Values: eventPageY:", event.pageY);
    console.log("Ripple Values: height:", height);
    console.log("Ripple Values: width:", width);
    console.log("Ripple Values: top:", top);
    console.log("Ripple Values: left:", left);
    console.log("Ripple Values Ends===============");
    this.setState({
      width: (height / 2) + "px",
      height: (height / 2) + "px",
      top: top + "px",
      left: left + "px",
      animate: true
    });
  }

  componentDidUpdate() {
    let rippleTimeout = function(){
      if(!this.state.width) {
        return false;
      }
      this.setState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        translateX: 0,
        translateY: 0,
        animate: false
      });
    }
    rippleTimeout = rippleTimeout.bind(this);
    setTimeout(rippleTimeout, 1500);
  }

  render() {
    return (
      <s.ripple.RippleWrapper onClick={this.createRipple}>
        {this.props.children}
        <s.ripple.RippleElement
          width={this.state.width}
          height={this.state.height}
          top={this.state.top}
          left={this.state.left}
          color={this.props.color}
          translateX={this.state.translateX}
          translateY={this.state.translateY}
          animate={this.state.animate}
        >
        </s.ripple.RippleElement>
      </s.ripple.RippleWrapper>
    );
  }
}

Ripple.defaultProps = {
}

Ripple.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Ripple;