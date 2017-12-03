import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Ripple from '../components/common/Ripple';
import FormFields from '../components/common/FormFields';
import Input from '../components/common/Inputs';

const InputText = <Input
  type="text"
  placeholder="Test"
  name="text" 
/>;

const InputEmail = <Input
  type="email"
  placeholder="Email"
  name="email" 
/>;

const InputPassword = <Input
  type="password"
  placeholder="Password"
  name="password" 
/>;

const InputDate = <Input
  type="date"
  placeholder="Test"
  name="date" 
/>;

const InputCheckbox = <Input
  type="checkbox"
  name="checkbox" 
/>;

const InputRadio = <Input
  type="radio"
  name="radio" 
/>;

storiesOf('FormFields', module)
  .add('Text', () =>
      <FormFields
        type="input"
        fieldComponent={<Input
          type="text"
          placeholder="Test"
          name="text" 
        />}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Text with Icon', () =>
      <FormFields
        type="input"
        showIcon={true}
        icon="square-o"
        fieldComponent={InputText}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Text with Error', () =>
      <FormFields
        type="input"
        fieldComponent={<Input
          type="text"
          placeholder="Test"
          name="text" 
          hasErrors={true}
        />}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Email', () =>
      <FormFields
        type="input"
        fieldComponent={InputEmail}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Passowrd', () =>
      <FormFields
        type="input"
        fieldComponent={InputPassword}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Date', () =>
      <FormFields
        type="input"
        fieldComponent={InputDate}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Checkbox', () =>
      <FormFields
        type="input"
        fieldComponent={InputCheckbox}
        subtype="button"
        onClick={action('clicked')}
      />)
  .add('Radio', () =>
      <FormFields
        type="input"
        fieldComponent={InputRadio}
        subtype="button"
        onClick={action('clicked')}
      />)

