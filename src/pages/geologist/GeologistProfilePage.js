import React from 'react';
import { Text } from '@gpn-design/uikit/Text';
import TheHeader from '../../components/TheHeader/TheHeader';
import TheFooter from '../../components/TheFooter/TheFooter';

function GeologistProfilePage() {
  return (
    <React.Fragment>
      <TheHeader role='Куратор' />
      <div className='content decorator decorator_space-v_3xl'>
        <div className='content__main decorator decorator_indent-v_4xl'>
          <Text size='m' view='ghost' align='center'>Здесь будет профиль пользователя</Text>
        </div>
      </div>
      <TheFooter />
    </React.Fragment>
  );
}

export default GeologistProfilePage;
