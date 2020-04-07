import React from 'react';
import { Text, Button, IconTop, IconDown, Badge } from '@gpn-design/uikit';

import { adviceList } from '../../mocks/adviceList';
import './AdvicePopup.css';

const bindShowAdvicePopup = (button) => {
  let popup = document.querySelector(button.getAttribute('popup'));
  let nextPopupButton = popup.querySelector('.advicepopup__next');
  let prevPopupButton = popup.querySelector('.advicepopup__prev');
  
  button.addEventListener('click', () => {
    popup.classList.toggle('advicepopup_visible');
  });
  nextPopupButton.addEventListener('click', () => {
    let nextPopup = document.querySelector(nextPopupButton.getAttribute('href'));
    popup.classList.toggle('advicepopup_visible');
    nextPopup.classList.toggle('advicepopup_visible');
  });
  prevPopupButton.addEventListener('click', () => {
    let prevPopup = document.querySelector(prevPopupButton.getAttribute('href'));
    popup.classList.toggle('advicepopup_visible');
    prevPopup.classList.toggle('advicepopup_visible');
  });
};
const advicePopup = () => {
  document.querySelectorAll('.block__avicebutton').forEach(button => {
    bindShowAdvicePopup(button);
  });
}
setTimeout(() => {
    advicePopup();
}, 500);

function AdvicePopup(props) {
  const { id, isEditable, className = '' } = props;
  let adviceInfo = adviceList.filter(item => item.id === id)[0];
  let statusName;

  if(adviceInfo.status === 'success')     statusName = 'Позитивный эффект';
  else if(adviceInfo.status === 'error')  statusName = 'Негативный эффект';
  else if(adviceInfo.status === 'system') statusName = 'Нейтральный эффект';

  return (
    <div className='advicepopup theme theme_color_gpn-dark' id={`advicepopup${id}`}>
      <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_xs'>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Text size='2xs' view='secondary' transform='uppercase' className='decorator decorator_indent-r_xs'>{id} из {adviceList.length} советов</Text>
          <Button as='a' href={`#advicepopup${id-1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconTop} disabled={id === 1 ? true : false} className='advicepopup__prev' />
          <Button as='a' href={`#advicepopup${id+1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} disabled={id === adviceList.length ? true : false} className='advicepopup__next' />
        </div>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Badge status={adviceInfo.status} size='m' view='filled' form='default' label={statusName} />
          {isEditable ? <Button size='xs' view='ghost' label='Применен' className='decorator decorator_indent-l_xs' /> : ''}
        </div>
      </div>
      
      <Text size='s' view='primary' className='decorator decorator_indent-b_s'>{adviceInfo.text}</Text>
      <Text size='s' view='secondary'>{adviceInfo.case}</Text>

      <div className=''></div>
    </div>
  );
}

export default AdvicePopup;
  