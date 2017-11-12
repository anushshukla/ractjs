import React from 'react';
import PropTypes from 'prop-types';
import s from './style';

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

  getAbsoluteCoords(elem) {
    const box = elem.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top  = box.top +  scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    console.log("=======Ripple Values Starts========");
    console.log("Ripple Element box top", box.top);
    console.log("Ripple Element scrollTop", scrollTop);
    console.log("Ripple Element clientTop", clientTop);
    
    console.log("Ripple Element box left", box.left);
    console.log("Ripple Element scrollLeft", scrollLeft);
    console.log("Ripple Element clientLeft", clientLeft);

    return { top: Math.round(top), left: Math.round(left) };
  }

  createRipple(event) {
    const ele = event.currentTarget;
    const bounds = this.getAbsoluteCoords(ele);
    const offsetLeft = bounds.left;
    const offsetTop = bounds.top;
    const height = ele.clientHeight;
    const width = ele.clientWidth;
    const left = event.pageX - offsetLeft - (height/4);
    const top = event.pageY - offsetTop - (height/4);
    const radius = (height > width ? width : height)/2;
    console.log("Ripple Element: ele:", ele);
    console.log("Ripple Values: offsetLeft:", offsetLeft);
    console.log("Ripple Values: offsetTop:", offsetTop);
    console.log("Ripple Values: eventPageX:", event.pageX);
    console.log("Ripple Values: eventPageY:", event.pageY);
    console.log("Ripple Values: height:", height);
    console.log("Ripple Values: width:", width);
    console.log("Ripple Values: radius:", radius);
    console.log("Ripple Values: top:", top);
    console.log("Ripple Values: left:", left);
    console.log("=======Ripple Values Ends========");
    this.setState({
      width: radius + "px",
      height: radius + "px",
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
    setTimeout(rippleTimeout, 1000);
  }

  render() {
    return (
      <s.RippleWrapper onClick={this.createRipple}>
        <s.RippleInnerWrapper>
          <s.RippleElement
            width={this.state.width}
            height={this.state.height}
            top={this.state.top}
            left={this.state.left}
            color={this.props.color}
            translateX={this.state.translateX}
            translateY={this.state.translateY}
            animate={this.state.animate}
          >
          </s.RippleElement>
        </s.RippleInnerWrapper>
      </s.RippleWrapper>
    );
  }
}

Ripple.defaultProps = {
}

Ripple.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Ripple;