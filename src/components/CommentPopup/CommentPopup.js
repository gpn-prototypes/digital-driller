import React from 'react';
import { Text, Button, IconTop, IconDown, Avatar } from '@gpn-design/uikit';

import { adviceList } from '../../mocks/adviceList';
import './CommentPopup.css';
import Field from '../Field/Field';

function CommentPopup(props) {
  const { isVisible, isEditable, count, className = '' } = props;
  let id = 2; // todo
  let commentList = [];

  for (let id = 0; id < count; id++) {
    commentList.push(
      <div className='commentpopup__item'>
        <div className='commentpopup__userinfo'>
          <Text size='s' weight='bold' view='primary' display='inline-block' className='decorator decorator_indent-r_xs'>@Фёдор Савенко</Text>
          <Text size='s' view='ghost' display='inline-block'>12:30</Text>
        </div>
        <Text size='s' view='primary' lineHeight='s'>Мне кажется это полезно будет описать в программе и взять на заметку.</Text>
      </div>
    )
 }

  return (
    <div className={`commentpopup ${isVisible ? 'commentpopup_visible' : ''}`}>
      {count < 0 ? 
        <div className='commentpopup__header'>
          <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
            <Text size='2xs' view='secondary' transform='uppercase' className='decorator decorator_indent-r_xs'>{id} из {adviceList.length} обсуждений</Text>
            <Button as='a' href={`#commentpopup${id-1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconTop} disabled={id === 1 ? true : false} className='commentpopup__prev' />
            <Button as='a' href={`#commentpopup${id+1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} disabled={id === adviceList.length ? true : false} className='commentpopup__next' />
          </div>
          {isEditable ? <Button size='xs' view='ghost' label='Применен' className='commentpopup__done' /> : ''}
        </div> : ''}
      
      {count > 0 ?
        <div className='decorator decorator_space-t_xs'>
          {commentList}
        </div> : ''}
      
      <div className='commentpopup__item'>
        <Field size='s' view='clear' width='full' placeholder='Ваш комментарий' />
      </div>
    </div>
  );
}

export default CommentPopup;
  