import React from 'react';
import { Text, Button, IconTop, IconDown, Badge } from '@gpn-design/uikit';

import { adviceList } from '../../mocks/adviceList';
import './AdvicePopup.css';
import Field from '../Field/Field';

function AdvicePopup(props) {
  const { id, isVisible, isEditable } = props;
  let adviceInfo = adviceList.filter(item => item.id === id)[0];
  let statusName;

  if(adviceInfo.status === 'success')     statusName = 'Позитивный эффект';
  else if(adviceInfo.status === 'error')  statusName = 'Негативный эффект';
  else if(adviceInfo.status === 'system') statusName = 'Нейтральный эффект';

  return (
    <div className={`advicepopup theme theme_color_gpn-dark ${isVisible ? 'advicepopup_visible' : ''}`} id={`advicepopup${id}`}>
      <div className='advicepopup__header'>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Text size='2xs' view='secondary' transform='uppercase' className='decorator decorator_indent-r_xs'>{id} из {adviceList.length} советов</Text>
          <Button as='a' href={`#advicepopup${id-1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconTop} disabled={id === 1 ? true : false} className='advicepopup__prev' />
          <Button as='a' href={`#advicepopup${id+1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} disabled={id === adviceList.length ? true : false} className='advicepopup__next' />
        </div>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Badge status={adviceInfo.status} size='m' view='filled' form='default' label={statusName} />
          <div className='decorator decorator_indent-l_xs'>
            {isEditable ? <Button size='xs' view='ghost' label='Применен' /> : ''}
          </div>
        </div>
      </div>

      <div className='advicepopup__content'>
        <Text size='s' view='primary' className='decorator decorator_indent-b_s'>{adviceInfo.text}</Text>
        <Text size='s' view='secondary'>{adviceInfo.case}</Text>
      </div>
      

      <div className='advicepopup__footer'>
        <div className='advicepopup__comment'>
          <Text size='s' weight='bold' view='primary' display='inline-block' className='decorator decorator_indent-r_xs'>@Фёдор Савенко</Text>
          <Text size='s' view='ghost' display='inline-block'>12:30</Text>

          <Text size='s' view='primary' className='decorator decorator_indent-t_2xs'>Мне кажется это полезно будет описать в программе и взять на заметку.</Text>
        </div>

        <Field size='s' view='clear' width='full' placeholder='Ваш комментарий' />
      </div>
    </div>
  );
}

export default AdvicePopup;
  