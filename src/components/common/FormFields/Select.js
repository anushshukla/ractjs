import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import s from './style';

class Select extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (<s.select
      type="{this.props.type}"
      multiple="{this.props.multiple}"
    />);
  }
}

Select.propTypes = {
  required: false,
  multiple: false
}

Select.propTypes = {
  required: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.array,
  optGroup: PropTypes.array,
  multiple: PropTypes.bool.isRequired,
  fetchOptions: PropTypes.func
}

export default Select;