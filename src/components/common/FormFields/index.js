import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from './style';
import Input from '../Inputs';
import Select from './Select';
import Label from './Label';
import * as FontAwesome from 'react-icons/lib/fa'
import MailIcon from 'react-icons/lib/fa/envelope-square'


class FormFields extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      hasError: 0,
      errors: 0
    }

    this.onChange = this.onChange.bind(this);
    this.onBlur   = this.onBlur.bind(this);
    this.onFocus  = this.onFocus.bind(this);
    this.onClick  = this.onClick.bind(this);
  }

  onChange(event) {
    if(typeof this.props[onChange] === "function") {
      this.props[onChange]();
    }
  }

  onClick(event) {
    if(typeof this.props[onClick] === "function") {
      this.props[onClick]();
    }
  }

  onBlur(event) {
    if(typeof this.props[onBlur] === "function") {
      this.props[onBlur]();
    }
  }

  onFocus(event) {
    if(typeof this.props[onFocus] === "function") {
      this.props[onFocus]();
    }
  }

  renderLabel() {
    return (<label for=""></label>);
  }

  renderFontAwesome() {
    return (
      <s.FormFieldIconWrapper>
        <MailIcon name={this.props.icon}/>
      </s.FormFieldIconWrapper>
    )
  }

  render() {
    return (
      <s.inputWrapper>
        {this.props.showLabel ? this.renderLabel() : ''}
        {this.props.showIcon ? this.renderFontAwesome() : ''}
        {this.props.fieldComponent}
      </s.inputWrapper>
      );
  }
}

class InputText extends PureComponent {
  render() {
    return (<input type="text" />);
  }
}

InputText.PropTypes = {
  type: PropTypes.oneOf(["checkbox", "color", "date", "datetimefraction", "email", "file", "hidden", "image", "month", "number", "password", "radio", "rangecontrol", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
}

class TextArea extends PureComponent {
  render() {
    return (<input type="text" />);
  }
}

const Form = props => {
  return (<form>
    <fieldset>
      <legend>Personalia:</legend>
      Name: <input type="text" size="30" /><br />
      Email: <input type="text" size="30" /><br />
      Date of birth: <input type="text" size="10" />
    </fieldset>
  </form>)
}

FormFields.defaultProps = {
  type: "text",
  required: false,
  multiple: false,
  showIcon: false,
  showLabel: false
}



FormFields.propTypes = {
  type: PropTypes.oneOf(['select', "textarea", "datalist", "output", "input"]),
  onClick: PropTypes.func,
  required: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool.isRequired,
  showLabel: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  fieldComponent: PropTypes.instanceOf(Input),
  labelComponent: PropTypes.instanceOf(Label)
}

export default FormFields;