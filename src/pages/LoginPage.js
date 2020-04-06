import React from 'react';
import { Text, Button } from '@gpn-design/uikit';
import Field from '../components/Field/Field';

function LoginPage() {
  return (
    <div className='login-page'>
      <div className='login-form'>
        <Text size='l' view='primary' weight='bold' align='center' className='decorator decorator_indent-b_xl'>Вход в Программу бурения</Text>
        <div className='pt-form pt-form_space-v_xs'>
          <div className='pt-form__item'>
            <Text tag='label' size='s' view='secondary' display='block' for='mail' className='decorator decorator_indent-b_2xs'>Имя пользователя</Text>
            <Field width='full' size='m' type='text' placeholder='' />
          </div>
          <div className='pt-form__item'>
            <div className='decorator decorator_distribute_between decorator_indent-b_2xs'>
              <Text tag='label' size='s' view='secondary' display='block' for='password'>Пароль</Text>
              <Text tag='a' size='s' view='link' display='block' href='#'>Забыли пароль?</Text>
            </div>
            <Field width='full' size='m' type='password' placeholder='' />
          </div>
          <div className='pt-form__item'>
            <Button size='m' view='primary' width='full' label='Войти, как куратор' as='a' href='/curator/list:false' className='text text_align_center' />
          </div>
          <div className='pt-form__item'>
            <Button size='m' view='primary' width='full' label='Войти, как геолог' as='a' href='/geologist/list' className='text text_align_center' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
