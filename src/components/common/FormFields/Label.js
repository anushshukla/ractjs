import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from './style';
import Input from '../Inputs';

const Label = props => {
  return <s.inputLabel for="{props.for}">{this.props.children}{this.props.fieldComponent}</s.inputLabel>
} 

Label.defaultProps = {
}

Label.PropTypes = {
  text: PropTypes.string.isRequired,
  fieldComponent: PropTypes.instanceOf(Input).isRequired,
}

export default Label;