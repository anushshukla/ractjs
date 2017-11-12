import React from 'react';
import HeaderPartial from '../partials/HeaderPartial';
import FooterPartial from '../partials/FooterPartial';
import s from '../theme/basic';
const RegLayout = props => (
  <s.Wrapper>
    <HeaderPartial />
    <main>
      {props.children}
    </main>
    <FooterPartial />
  </s.Wrapper>
)

export default RegLayout;