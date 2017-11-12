import styled, {keyframes} from 'styled-components';

const styles = {};

const rippleAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 0.4;
  }
  to {
    transform: scale(100);
    opacity: 0;
  }
`

styles.RippleElement = styled.div`
  position: absolute;
  border-radius: 50%;
  height: ${props => (props.height)};
  width: ${props => (props.width)};
  top: ${props => (props.top)};
  left: ${props => (props.left)};
  background: ${props => (props.color)};
  ${props => (props.animate ? "animation: "+rippleAnimation+" 2s;" : '')}
`

styles.RippleWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

styles.RippleInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`

export default styles;