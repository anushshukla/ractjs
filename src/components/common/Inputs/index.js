import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from '../FormFields/style';
import * as FontAwesome from 'react-icons/lib/fa'
import MailIcon from 'react-icons/lib/fa/envelope-square'

class Input extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hasErrors: props.hasErrors || false,
      hasBeenFocused: false
    }
    this.onChange = this.onChange.bind(this);
    this.onBlur   = this.onBlur.bind(this);
    this.onFocus  = this.onFocus.bind(this);
    this.onClick  = this.onClick.bind(this);
    this.onKeyDown  = this.onKeyDown.bind(this);
    this.onKeyPress  = this.onKeyPress.bind(this);
    this.onKeyUp  = this.onKeyUp.bind(this);

  }

  onChange(event) {
    /*if(typeof this.props[onChange] === "function") {
      this.props[onChange]();
    }*/
  }

  validate(value) {
    if(!this.isValid()) {
      this.setState({...this.state,...{hasErrors}});
    }
  }

  isValid(value) {
    const requiredError = this.props.required && !value ? true : false;
    if(requiredError) {
      return false;
    }
    const patternError = this.props.pattern && !this.props.pattern.test(value) ? true : false;
    if(patternError) {
      return false;
    }
    return true;
  }

  onClick(event) {
    console.log("input click event");
    /*if(typeof this.props[onClick] === "function") {
      this.props[onClick]();
    }*/
    if(!this.props.validateOnBlur || !this.state.hasBeenFocused) {
      return false;
    }
    this.validate(event.target.value);
  }

  onBlur(event) {
    /*if(typeof this.props[onBlur] === "function") {
      this.props[onBlur]();
    }*/
    const hasBeenFocused = true;
    if(!this.props.validateOnBlur) {
      this.setState({...this.state,...{hasBeenFocused}});
      return false;
    }
    this.validate(event.target.value);
  }

  onKeyDown(event) {
    console.log("input key down event");
    /*if(typeof this.props[OnKeyDown] === "function") {
      this.props[OnKeyDown]();
    }*/
    if(!this.props.validateOnKeyEvts) {
      return false;
    }
    this.validate(event.target.value);
  }

  onKeyPress(event) {
    console.log("input key press event");
    /*if(typeof this.props[onFocus] === "function") {
      this.props[onFocus]();
    }*/
  }

  onKeyUp(event) {
    console.log("input key up event");
    /*if(typeof this.props[onFocus] === "function") {
      this.props[onFocus]();
    }*/
    if(!this.props.validateOnBlur) {
      return false;
    }
    this.validate(event.target.value);
    this.setState({...this.state,...{hasErrors}});
  }

  onFocus(event) {
    console.log("input focus event");
    /*if(typeof this.props[onFocus] === "function") {
      this.props[onFocus]();
    }*/
  }

  onContextMenu(event) {
    console.log("input context menu event");
    /*if(typeof this.props[onFocus] === "function") {
      this.props[onFocus]();
    }*/
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  renderErrMsg() {
    if(!this.props.allowErrMsg) {
      return '';
    }
    return (
      <span>
        <br />{this.props.errMsg || 'please fix the above field!'}
      </span>
    )
  }

  renderLabel() {
    return (<label for=""></label>);
  }

  renderIcon() {
    return (
      <s.FormFieldIconWrapper>
        <MailIcon name={this.props.icon}/>
      </s.FormFieldIconWrapper>
    )
  }

  renderErrIcon() {
    return (
      <s.FormFieldIconWrapper>
        <MailIcon name={this.props.icon}/>
      </s.FormFieldIconWrapper>
    )
  }

  render() {
    console.log("rendered called");
    return (
      <s.inputWrapper>
        {this.props.showLabel ? this.renderLabel() : ''}
        {this.props.showIcon ? this.renderIcon() : ''}
        <s.input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          pattern={this.props.pattern}
          hasErrors={this.state.hasErrors}
          onFocus={this.onFocus}
          onClick={this.onClick}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onKeyPress={this.onKeyPress}
          onKeyUp={this.onKeyUp}
          onBlur={this.onBlur}
          onContextMenu={this.onContextMenu}
        />
        {this.props.showIcon ? this.renderErrIcon() : ''}
        {this.state.hasErrors ? this.renderErrMsg() : ''}

      </s.inputWrapper>
    );
  }
}

Input.types = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetimefraction",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "rangecontrol",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
]

Input.defaultProps = {
  type: "text",
  required: false,
  multiple: false,
  showIcon: false,
  showLabel: false,
  validateOnBlur: false,
  allowErrMsg: false,
  style: {}
}

Input.PropTypes = {
  type: PropTypes.oneOf(Input.types),
  name: PropTypes.string,
  required: PropTypes.bool.isRequired,
  pattern: PropTypes.bool.string,
  placeholder: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorComponent: PropTypes.instanceOf(this.type+"Error"),
  style: PropTypes.object,
  showIcon: PropTypes.bool.isRequired,
  showLabel: PropTypes.bool.isRequired,
  validateOnBlur: PropTypes.bool.isRequired,
  allowErrMsg: PropTypes.bool.isRequired,
}

export default Input;