import styled, {keyframes} from 'styled-components';

const styles = {};

styles.pickerWheelOuterWrap = styled.div`
  width: 50px;
  overflow: hidden;
  margin: 10px 20px;
`;

styles.pickerWheelWrap = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 52px;
  padding-right: ${props => {console.log(props);props.paddingRight}};
  padding-right: ${props => props.paddingRight};
  margin-right: ${props => '-'+props.paddingRight};
`;

styles.selectedValueEffect = styled.span`
  height: 35px;
  border-top: 1x dash red;
  border-bottom: 1x dash red;
`;

styles.pickerWheel = styled.span`
  display: inline-flex;
  width 100%;
  cursor: pointer;
`;

styles.modalWrap = styled.span`
  top: ${props => (props.top)};
  left: ${props => (props.left)};
  z-index: 2;
  position: fixed;
  background-color: rgba(23, 21, 21, 0.72);
  color: white;
`;

styles.modalOverlay = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
`;

styles.pickerWheelsWrap = styled.div`
  display: flex;
`;

styles.FormFieldIconWrapper = styled.span`
  position:absolute;
  left:10px;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
`;

styles.input = styled.input`
  padding: 5px 10px;
  ${props => (props.hasErrors ? "border: 1px solid red" : '')}
`;

styles.select = styled.select`
  ${props => (props.hasErrors ? "border: 1px solid red" : '')}
`;

styles.inputWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  padding:0;
  margin:0;
`;

styles.inputLabel = styled.label`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`

styles.btnWrap = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`

styles.closeBtn = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 30px;
`

styles.setBtn = styled.button`
  display: inline-block;
  width: 50px;
  padding: 5px 10px;
`


export default styles;