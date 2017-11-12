import { Link } from 'react-router-dom'
import React from 'react';
import s from '../components/styled';
import Ripple from '../components/common/Ripple';
const LeftSideMenu = props => (
	<ul>
    <s.menuList>
        <Link to="/practice/home">
          <s.navBtn>
              <Ripple color="#fff" />
              Login
          </s.navBtn>
        </Link>
    </s.menuList>
    <s.menuList>
        <Link to="/practice/about">
          <s.navBtn>
              <Ripple color="#fff" />
              About
          </s.navBtn>
        </Link>
    </s.menuList>
    <s.menuList>
        <Link to="/practice/contacts">
          <s.navBtn>
              <Ripple color="#fff" />
              Contacts
          </s.navBtn>
        </Link>
    </s.menuList>
	</ul>
)

export default LeftSideMenu;