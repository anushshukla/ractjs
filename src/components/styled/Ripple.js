import styled, {keyframes} from 'styled-components';

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

const RippleElement = styled.div`
  position: absolute;
  border-radius: 50%;
  height: ${props => (props.height)};
  width: ${props => (props.width)};
  top: ${props => (props.top)};
  left: ${props => (props.left)};
  background: ${props => (props.color)};
  ${props => (props.animate ? "animation: "+rippleAnimation+" 2s;" : '')}
`

const RippleWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export {
  RippleElement,
  RippleWrapper
}