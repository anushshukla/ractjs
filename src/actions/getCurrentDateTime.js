import types from '../action_types';
import axios from 'axios';

export default prefix => dispatch => {
  dispatch({ type: types.UPTIME_REQUEST, payload: {} });
};