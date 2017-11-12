import React from 'react';
import s from '../components/styled';
import LeftSideMenu from '../partials/LeftSideMenu';
const RegLayout = props => (
  <s.container>
    <s.menuTitle>Menu</s.menuTitle>
    <LeftSideMenu />
    <hr />
    {props.children}
  </s.container>
)

export default RegLayout;