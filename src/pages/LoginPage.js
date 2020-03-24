import React from 'react';
import { Text, Input, Button } from '@gpn-design/uikit';

function LoginPage() {
  return (
    <React.Fragment>
      <div className='login-form'>
        <Text size='l' view='primary' weight='bold' align='center' className='decorator decorator_indent-b_xl'>Вход в Программу бурения</Text>
        <div className='pt-form pt-form_space-v_xs'>
          <div className='pt-form__item'>
            <Text tag='label' size='s' view='secondary' display='block' for='mail' className='decorator decorator_indent-b_2xs'>Имя пользователя</Text>
            <Input wpSize='m' view='default' width='full' id='mail' type='login'></Input>
          </div>
          <div className='pt-form__item'>
            <div className='decorator decorator_distribute_between decorator_indent-b_2xs'>
              <Text tag='label' size='s' view='secondary' display='block' for='password'>Пароль</Text>
              <Text tag='a' size='s' view='link' display='block' href='#'>Забыли пароль?</Text>
            </div>
            <Input wpSize='m' view='default' width='full' id='password' type='password'></Input>
          </div>
          <div className='pt-form__item'>
            <Button wpSize='m' view='primary' width='full' isLink={true} href='/curator/list' className='text text_align_center'>Войти, как куратор</Button>
          </div>
          <div className='pt-form__item'>
            <Button wpSize='m' view='primary' width='full' isLink={true} href='/geologist/list' className='text text_align_center'>Войти, как геолог</Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
