import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from '../FormFields/style';

class Input extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hasErrors: props.hasErrors || false
    }
  }

  render() {
  console.log(this.state.hasErrors);
    return (<s.input
      type={this.props.type}
      name={this.props.name}
      placeholder={this.props.placeholder}
      pattern={this.props.pattern}
      hasErrors={this.state.hasErrors}
    />);
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
  multiple: false
}

Input.PropTypes = {
  type: PropTypes.oneOf(Input.types),
  name: PropTypes.string,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  errorComponent: PropTypes.instanceOf(this.type+"Error"),
  style: PropTypes.instanceOf(this.type+"Style"),
}

export default Input;