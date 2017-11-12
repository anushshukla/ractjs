import React from 'react';
// import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const CreateProfilePage = props => (
  <div>
    Please wait while we load the right page for your
    { !this.props.profileCreated ? <Redirect from="/registration/" to="/registration/page1" /> : <Redirect from="/registration/" to="/dashboard" /> }
  </div>
);

/*CreateProfilePage.defaultProps = {
}

CreateProfilePage.propTypes = {
}*/

export default CreateProfilePage;