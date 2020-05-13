import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';
import { Button } from '@gpn-design/uikit/Button';
import { IconTop } from '@gpn-design/uikit/IconTop';
import { IconDown } from '@gpn-design/uikit/IconDown';
import Field from '../Field/Field';

import { team } from '../../mocks/team';
import { adviceList } from '../../mocks/adviceList';
import './CommentPopup.css';

function CommentPopup(props) {
  const { isVisible, isEditable, count } = props;
  const { user } = useContext(UserContext);
  const [commentList, setCommentList] = useState([]);

  const addComment = (key, target) => {
    if(key == 'Enter' && target.value !== '') {
      let thisUser = team.filter(x => x.role === user.role && x.name === user.name);
      let newList = [...commentList, { username: `@${user.name}`, text: target.value }];
      
      setCommentList(newList);
    }
  }
  let id = 2; // todo

  return (
    <div className={`commentpopup ${isVisible ? 'commentpopup_visible' : ''}`}>
      {/* {commentList.length > 0 ? 
        <div className='commentpopup__header'>
          <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
            <Text size='2xs' view='secondary' transform='uppercase' className='decorator decorator_indent-r_xs'>{id} из {adviceList.length} обсуждений</Text>
            <Button as='a' href={`#commentpopup${id-1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconTop} disabled={id === 1 ? true : false} className='commentpopup__prev' />
            <Button as='a' href={`#commentpopup${id+1}`} size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} disabled={id === adviceList.length ? true : false} className='commentpopup__next' />
          </div>
          {isEditable ? <Button size='xs' view='ghost' label='Применен' className='commentpopup__done' /> : ''}
        </div> : ''
      } */}
      
      { commentList.length > 0 ?
        <div className='decorator decorator_space-t_xs'>
          {commentList.map(x => {
            return <div className='commentpopup__item' key={x.text}>
                      <div className='commentpopup__userinfo'>
                        <Text size='s' weight='bold' view='primary' display='inline-block' className='decorator decorator_indent-r_xs'>{x.username}</Text>
                        <Text size='s' view='ghost' display='inline-block'>12:30</Text>
                      </div>
                      <Text size='s' view='primary' lineHeight='s'>{x.text}</Text>
                  </div>
          })}
        </div> : ''
      }
      
      <div className='commentpopup__item'>
        <Field size='s' view='clear' width='full' placeholder='Ваш комментарий' onKeyDown={ (e) => addComment(e.key, e.target) } />
      </div>
    </div>
  );
}

export default CommentPopup;
  