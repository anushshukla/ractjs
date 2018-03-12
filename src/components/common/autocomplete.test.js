import React from 'react';
import { mount } from 'enzyme';
import AutoComplete from '../../AutoComplete';
import s from '../../../IdVerificationComponent/styles';

const props = {
  div: s.MenuActiveWrap,
  ul: s.MenuActiveUl,
  li: s.MenuActiveLi,
  options: [
    {
      text: 'Aadhaar Card',
    },
    {
      text: 'PAN Card',
    },
    {
      text: 'Passport',
    },
    {
      text: 'Driving License',
    },
  ],
};

const AutoCompleteMounted = mount(<AutoComplete {...props} />);

describe('when down key is pressed', () => {
  AutoCompleteMounted.setProps({ moveDown: 1 });
  it('test', () => {
    expect(AutoCompleteMounted).toHaveLength(1);
  });
});

describe('when down key is pressed to max to reach the bottom most options', () => {
  AutoCompleteMounted.setProps({ moveDown: 2 });
  AutoCompleteMounted.setProps({ moveDown: 3 });
  AutoCompleteMounted.setProps({ moveDown: 4 });
  it('test', () => {
    expect(AutoCompleteMounted).toHaveLength(1);
  });
});

describe('when up key is pressed', () => {
  AutoCompleteMounted.setProps({ moveUp: 1 });
  it('test', () => {
    expect(AutoCompleteMounted).toHaveLength(1);
  });
});

describe('when up key is pressed to max to reach the top most option', () => {
  AutoCompleteMounted.setProps({ moveDown: 2 });
  AutoCompleteMounted.setProps({ moveDown: 3 });
  AutoCompleteMounted.setProps({ moveDown: 4 });
  it('test', () => {
    expect(AutoCompleteMounted).toHaveLength(1);
  });
});

describe('when any character is typed', () => {
  AutoCompleteMounted.setProps({ userInputTxt: 'A' });
  it('test', () => {
    expect(AutoCompleteMounted).toHaveLength(1);
  });
});
