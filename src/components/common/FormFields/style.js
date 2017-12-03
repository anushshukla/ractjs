import styled, {keyframes} from 'styled-components';

const styles = {};

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
  ${props => (props.hasErrors ? "border-color: "+"red" : '')}
`;

styles.select = styled.select`
  ${props => (props.hasErrors ? "border-color: "+"red" : '')}
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

export default styles;