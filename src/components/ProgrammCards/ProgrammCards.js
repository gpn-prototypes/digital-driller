import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';
import { IconArrowRight } from '@gpn-design/uikit/IconArrowRight';
import { Avatar } from '@gpn-design/uikit/Avatar';
import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';

import { team } from '../../mocks/team';
import './ProgrammCards.css';

function ProgrammCards(props) {
  const { programmList } = props;
  const { user } = useContext(UserContext);
  const history = useHistory();

  const getBadge = (stage) => {
    let badgeStatus = 'system';
    if (stage === 'Сформирована' || stage === 'Завершено')
      badgeStatus = 'success';
    else if (stage === 'Согласование')
      badgeStatus = 'normal';
    
    return <Badge size='s' view='stroked' status={badgeStatus} label={stage} />;
  }
  const getBush = (bush, well) => {
    return (
      <div className='decorator decorator_space-t_xs decorator_distribute_left decorator_vertical-align_center'>
        <Text size='s' view='secondary'>{ bush }</Text>
        <IconArrowRight size='xs' view='secondary' className='decorator decorator_indent-h_xs'/>
        <Text size='s' view='secondary'>{ well }</Text>
      </div>
    )
  }
  const getCurator = (programmTeam) => {
    let userName = programmTeam.filter(item => item.role === 'Куратор')[0];
    let user = team.filter(item => item.name === userName.name)[0];
    return <Avatar url={ user.avatar } size='s' form='round' />
  }
  const getProgress = (team) => {
    let list = team.map((item, index) => {
      if(item.status === 'Готово' || item.status === 'Согласован')
        return <div className={`ProgrammCard__part ProgrammCard__part_done`} key={`${index}-${item.status}`}></div>
      else if(item.status === 'Непримененный совет' || item.status === 'На доработку')
        return <div className={`ProgrammCard__part ProgrammCard__part_warning`} key={`${index}-${item.status}`}></div>
      else
        return <div className={`ProgrammCard__part`} key={`${index}-${item.status}`}></div>
    });
    
    return <div className='ProgrammCard__progress'>{ list }</div>
  }
  const getControl = (stage, team) => {
    let thisUser = team.filter(x => x.role === user.role && x.name === user.name)[0];
    thisUser = thisUser ? thisUser : '';
    let button = '';
    
    if(stage === 'Сформирована' && thisUser.role === 'Куратор')
      button = <Button size='s' view='primary' width='full' label='Распечатать' />;
    else if(thisUser.status === 'Заполняется')
      button = <Button size='s' view='primary' width='full' label='Заполнить' />;
    else if(thisUser.status === 'Согласуется')
      button = <Button size='s' view='primary' width='full' label='Проверить' />;
    else
      button = <Button size='s' view='ghost' width='full' label='Открыть' />;
    
    return button ? <div className='decorator decorator_space-t_xl'>{ button }</div> : ''
  }

  const list = programmList.map(item => {
    return (
      <div className='ProgrammCard' onClick={() => { history.push(`/digital-driller/programm/${item.id}`) }} key={item.id}>
        { getProgress(item.team) }
        <div className='ProgrammCard__header'>
          { getBadge(item.stage) }
          { getCurator(item.team) }
        </div>
        <div className='ProgrammCard__content'>
          <Text size='l' view='primary' weight='bold' lineHeight='2xs'>{item.type} скважина</Text>
          { getBush(item.bush, item.well) }
        </div>
        { getControl(item.stage, item.team) }
      </div>
    )
  });

  return (
    <div className='tpl-grid tpl-grid_xs-ratio_1-1 tpl-grid_s-ratio_1-1-1-1 tpl-grid_col-gap_half tpl-grid_row-gap_half'>
      {list}
    </div>
  );
}

export default ProgrammCards;
