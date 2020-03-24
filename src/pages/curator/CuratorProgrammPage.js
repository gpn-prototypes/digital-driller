import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '@gpn-design/uikit';
import TheHeader from '../../components/TheHeader/TheHeader';

function CuratorProgrammPage() {
  let { id } = useParams();
  return (
    <React.Fragment>
      <TheHeader page={`Программы`} role='curator' />
      <div className='content content_view_centered decorator decorator_space-v_3xl'>
        <Text tag='h1' size='3xl' weight='bold' view='primary' className='decorator decorator_indent-b_2xl decorator_indent-t_none'>Программа #{id}</Text>
      </div>
    </React.Fragment>
  );
}

export default CuratorProgrammPage;
