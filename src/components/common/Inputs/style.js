import styled, {keyframes} from 'styled-components';

const styles = {};

styles.pickerWheelWrap = styled.span`
  width: 200px;
  overflow: hidden;
`;

styles.pickerWheel = styled.span`
  width: 100%;
  height: 20px;
  overflow-y: scroll;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
`;

styles.modalWrap = styled.span`
  ${props => (props.animate ? "background-color: rgba(0, 0, 255, 0.5);" : '')}
  top: ${props => (props.top)};
  left: ${props => (props.left)};
  z-index: 2;
  position: fixed;
`;

export default styles;