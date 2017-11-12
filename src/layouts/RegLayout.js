import React from 'react';
import s from '../theme/basic';
import HeaderPartial from '../partials/HeaderPartial';
import FooterPartial from '../partials/FooterPartial';
export const RegLayout = props => (
  <s.Wrapper>
    <HeaderPartial />
    <main>
      {this.props.children}
    </main>
    <FooterPartial />
  </s.Wrapper>
)