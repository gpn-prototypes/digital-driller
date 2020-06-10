import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ProgrammInfoContext } from '../../../context/ProgrammInfoContext';

import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';
import { IconClose } from '@gpn-design/uikit/IconClose';
import { Text } from '@gpn-design/uikit/Text';
import { User } from '@gpn-design/uikit/User';

import { team } from '../../../mocks/team';

function ModalTeam(props) {
  const { onClose } = props;
  const history = useHistory();
  const { programmDeadline, programmTeam } = useContext(ProgrammInfoContext);

  const teamList = programmTeam.map((member, index) => {
    let thisUser = team.filter(x => x.role === member.role && x.name === member.name)[0];
    let badge, text = '';

    if(member.status === 'Заполняется')
      badge = <Badge status='system' view='stroked' size='s' label='В работе' />
    else if(member.status === 'Готово')
      badge = <Badge status='success' view='stroked' size='s' label='Готово' />
    else if(member.status === 'Непримененный совет')
      badge = <Badge status='warning' view='stroked' size='s' label='Непримененный совет' />
    else if(member.status === 'Согласуется')
      badge = <Badge status='system' view='stroked' size='s' label='В работе' />
    else if(member.status === 'В ожидании')
      badge = <Badge status='system' view='stroked' size='s' label='В ожидании' />
    else if(member.status === 'Согласован')
      badge = <Badge status='success' view='stroked' size='s' label='Согласовано' />
    
    if(member.status === 'Заполняется' || member.status === 'Непримененный совет' || member.status === 'Согласуется')
      text = <Text size='xs' view='ghost' transform='uppercase' className='decorator decorator_indent-r_s'>{programmDeadline}</Text>;

    return <div className='pt-list__item' key={index}>
              <User avatarUrl={thisUser.avatar} name={thisUser.name} size='m' info={thisUser.role} />
              <div className='decorator decorator_distribute_right decorator_vertical-align_center'>
                { text }
                { badge }
              </div>
            </div>
  });

  return (
    <div className='Modal'>
      <Button size='m' view='clear' onlyIcon={true} iconLeft={IconClose} form='round' onClick={onClose} className='Modal__close' />
      <Text as='h1' size='2xl' weight='bold' lineHeight='xs'>Команда программы</Text>
      <div className='pt-list pt-list_bordered pt-list_distribute_between pt-list_space-v_s pt-list_vertical-align_center decorator decorator_indent-t_s'>
        {teamList}
      </div>
    </div>
  );
}

export default ModalTeam;
  