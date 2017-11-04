import styled from 'styled-components';
import * as containers from './Container'
import * as btn from './Button'
import * as ripple from './Ripple'

const menuList = styled.li`
  display: inline-block;
  margin-bottom: 10px;
`

export default {
  container: containers.container,
  menuTitle: containers.menuTitle,
  navBtn: btn.navBtn,
  menuList: menuList,
  ripple: ripple
};