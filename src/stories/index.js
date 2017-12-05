import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Ripple from '../components/common/Ripple';
import FormFields from '../components/common/FormFields';
import Input from '../components/common/Inputs';
import DateUI from '../components/common/Inputs/DateUI';

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

storiesOf('FormFields', module)
  .add('Text', () =>
    <Input
        type="text"
        placeholder="Test"
        name="text" 
      />)
  .add('Text with Icon', () =>
    <Input
    type="text"
    placeholder="Test"
    name="text" 
    showIcon={true}
    icon="square-o"
    />
  )
  .add('Text with Error', () =>
    <Input
        type="text"
        placeholder="Test"
        name="text" 
        hasErrors={true}
      />
  )
  .add('Text with Error Msg', () =>
    <Input
        type="text"
        placeholder="Test"
        name="text" 
        hasErrors={true}
        allowErrMsg={true}
      />
  )
  .add('Text with Validation', () =>
    <Input
        type="text"
        placeholder="Test"
        name="text" 
        required={true}
        allowErrMsg={true}
        validateOnBlur={true}
      />
  )
  .add('Email', () =>
      <Input
        type="email"
        placeholder="Email"
        name="email" 
      />)
  .add('Passowrd', () =>
      <Input
        type="password"
        placeholder="Email"
        name="password" 
      />)
  .add('Date', () =>
      <Input
        type="date"
        placeholder="Email"
        name="date" 
      />)
  .add('Checkbox', () =>
      <Input
        type="checkbox"
        name="checkbox" 
      />)
  .add('Radio', () =>
      <Input
        type="radio"
        name="radio" 
      />)
  /*.add('DateUI', () =>
      <DateUI
        type="radio"
      />)*/
  

