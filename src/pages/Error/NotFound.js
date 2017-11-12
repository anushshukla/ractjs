import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props => (
  <div>NotFound</div>
)

NotFound.defaultProps = {
}

NotFound.propTypes = {
  color: PropTypes.string.isRequired,
}

export default NotFound;