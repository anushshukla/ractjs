import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from './style';
import Input from '../Inputs';
import Select from './Select';
import Label from './Label';


const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

// const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class FormFields extends PureComponent {

  constructor(props) {
    super(props);
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
}



FormFields.propTypes = {
  type: PropTypes.oneOf(['select', "textarea", "datalist", "output", "input"]),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  fieldComponent: PropTypes.instanceOf(Input),
  labelComponent: PropTypes.instanceOf(Label)
}

export default FormFields;