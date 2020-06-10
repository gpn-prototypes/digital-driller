import React, { useState, useContext } from 'react';
import { ProgrammInfoContext } from '../../context/ProgrammInfoContext';
import { UserContext } from '../../context/ProjectContext';

import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconKebab } from '@gpn-design/uikit/IconKebab';
import { IconDown } from '@gpn-design/uikit/IconDown';
import { IconTop } from '@gpn-design/uikit/IconTop';
import { Text } from '@gpn-design/uikit/Text';
import { User } from '@gpn-design/uikit/User';
import Field from '../Field/Field';

import { team } from '../../mocks/team';

function Conversation(props) {
  const { commentsCount, info } = props;
  const { user } = useContext(UserContext);
  const { programmTeam } = useContext(ProgrammInfoContext);
  const isMine = (author) => {
    return author === user.role;
  }

  // переключение между комментами

  const getUser = (role) => {
    const thisUserName = programmTeam.filter(user => user.role === role)[0];
    const thisUserInfo = team.filter(user => user.name === thisUserName.name)[0];
    
    return <User avatarUrl={thisUserInfo.avatar} name={thisUserInfo.name} size='s' info={role} />
  }
  const getAnswers = () => {
    if(info.answers.length == 0)
      return <Text size='xs' view='ghost' align='center' className='decorator decorator_indent-t_l'>Пока нет ни одного ответа</Text>
    else
    return info.answers.map(answer => {
      return (
        <div className='CommentPopup__item'>
          <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xs'>
              { getUser(answer.author) }
            <div className='decorator decorator_distribute_between decorator_vertical-align_center'>
              <Text size='xs' view='secondary' className='decorator decorator_indent-r_xs'>{answer.date}</Text>
              { isMine(answer.author) ?
                <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconKebab} />
                : '' /* <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconAdd} /> */
              }
            </div>
          </div>
          <Text size='s' view='primary' className='decorator_space-l_3xl'>{answer.text}</Text>
        </div>
      )
    })
  }
  
  return (
    <div className='CommentPopup Theme Theme_color_gpnDisplay'>
      <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_s'>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Text size='xs' view='secondary' className='decorator decorator_indent-r_xs'>{info.id} из {commentsCount}</Text>
          <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconTop} />
          <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} />
        </div>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          {/* <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconDown} /> */}
          { isMine ?
            <Button size='xs' view='ghost' label='Отметить решенным' className='decorator decorator_indent-l_xs' />
            : <Badge size='m' view='stroked' status='normal' label='обсуждается' />
          }
        </div>
      </div>

      <div className='CommentPopup__main'>
        <div className='CommentPopup__header decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_2xs'>
          { getUser(info.author) }
          <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
            <Text size='xs' view='secondary' className='decorator decorator_indent-r_xs'>{info.date}</Text>
            { isMine(info.author) ?
              <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconKebab} />
              : '' /* <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconAdd} /> */
            }
          </div>
        </div>

        <Text size='s' view='primary' className='decorator'>{info.text}</Text>
        {/* reactions */}
        {/* reactions: [{ name: '👍', count: 1 }, { name: '✅', count: 1 }], */}
      </div>

      { getAnswers() }
      
      <Field size='s' type='text' width='full' placeholder='Начните писать комментарий' className='decorator decorator_indent-t_l' />
    </div>
  )
}

export default Conversation;
  