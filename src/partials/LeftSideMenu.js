import { Link } from 'react-router-dom'
import React from 'react';
import s from '../components/styled';
import Ripple from '../components/Ripple';
const LeftSideMenu = props => (
	<ul>
    <s.menuList>
      <Ripple color="#fff">
        <s.navBtn>
          <Link to="/">Login</Link>
        </s.navBtn>
      </Ripple>
    </s.menuList>
    <s.menuList>
      <Ripple color="#fff">
        <s.navBtn>
          <Link to="/about">About</Link>
        </s.navBtn>
      </Ripple>
    </s.menuList>
    <s.menuList>
      <Ripple color="#fff">
        <s.navBtn>
          <Link to="/contacts">Contacts</Link>
        </s.navBtn>
      </Ripple>
    </s.menuList>
	</ul>
)

export default LeftSideMenu;