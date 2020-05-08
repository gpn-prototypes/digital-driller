import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RoleContext } from '../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import Field from '../components/Field/Field';
import Slider from '../components/Slider/Slider';

function LoginPage() {
  const history = useHistory();
  const { beGeologist, beCurator } = useContext(RoleContext);

  const curatorButtonHandler = () => {
    beCurator();
    history.push(`/digital-driller/main:false`)
  }
  const geologistButtonHandler = () => {
    beGeologist();
    history.push(`/digital-driller/main:false`)
  }

  return (
    <div className='LoginPage'>
      <div className='LoginPage__left'>
        <div className='LoginPage__logo decorator decorator_indent-b_5xl' />
        
        <div className='LoginForm'>
          <Text size='l' view='primary' weight='bold' align='center' className='decorator decorator_indent-b_2xl'>Вход в программу бурения</Text>
          
          <form>
            <div className='decorator decorator_indent-b_m'>
              <Text tag='label' size='s' view='secondary' display='block' for='mail' className='decorator decorator_indent-b_2xs'>Имя пользователя</Text>
              <Field width='full' size='m' type='text' placeholder='' />
            </div>
            <div className='decorator decorator_indent-b_xl'>
              <Text tag='label' size='s' view='secondary' display='block' for='password' className='decorator decorator_indent-b_2xs'>Пароль</Text>
              <Field width='full' size='m' type='password' placeholder='' />
            </div>

            <div className='decorator decorator_indent-b_m'>
              <Button size='m' view='primary' width='full' label='Войти, как куратор' onClick={ curatorButtonHandler } />
            </div>
            <div>
              <Button size='m' view='primary' width='full' label='Войти, как геолог' onClick={ geologistButtonHandler } />
            </div>
          </form>
          
          <Text size='s' view='ghost' align='center'  className='decorator decorator_indent-t_5xl'>Если возникли проблемы со входом на платформу, <Text as='a' size='s' href='mailto:help@gazprom-neft.ru' view='link'>напишите нам</Text></Text>
        </div>
        
      </div>

      <div className='LoginPage__right'>
        <Slider />
      </div>
    </div>
  );
}

export default LoginPage;
