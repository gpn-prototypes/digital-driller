import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { IconArrowRight } from '@gpn-design/uikit/IconArrowRight';
import { Avatar } from '@gpn-design/uikit/Avatar';
import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';

import { team } from '../../mocks/team';
import './ProgrammCards.css';

function ProgrammCards(props) {
  const { programmList } = props;
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
  const getUser = (name) => {
    let user = team.filter(item => item.name === name)[0];
    return <Avatar url={ user.avatar } size='s' form='round' />
  }
  const getProgress = (status = []) => {
    let list = status.map(item => {
      return <div className={`ProgrammCard__part ${item !== false ? `ProgrammCard__part_${item}` : ''}`}></div>
    });
    
  return <div className='ProgrammCard__progress'>{ list }</div>
  }
  const getControl = (stage, status) => {
    let button;
    
    if(stage === 'Сформирована')
      button = <Button size='s' view='primary' width='full' label='Распечатать' />;
    else if(stage === 'Заполнение') {
      if(status[0] === false || status[1] === false || status[2] === false)
        button = <Button size='s' view='primary' width='full' label='Заполнить' />;
      else
        button = <Button size='s' view='ghost' width='full' label='Открыть' />;
    } else if(stage === 'Согласование') {
      if(status[0] === false || status[1] === false || status[2] === false || status[3] === false || status[4] === false)
        button = <Button size='s' view='primary' width='full' label='Проверить' />;
      else
        button = <Button size='s' view='ghost' width='full' label='Открыть' />;
    }
    
    return button ? <div className='decorator decorator_space-t_xl'>{ button }</div> : ''
  }

  const list = programmList.map(item => {
    return (
      <div className='ProgrammCard' onClick={() => { history.push(`/digital-driller/programm/${item.id}`) }}>
        { getProgress(item.status) }
        <div className='ProgrammCard__header'>
          { getBadge(item.stage) }
          { getUser(item.curator) }
        </div>
        <div className='ProgrammCard__content'>
          <Text size='l' view='primary' weight='bold' lineHeight='2xs'>{item.type} скважина</Text>
          { getBush(item.bush, item.well) }
        </div>
        { getControl(item.stage, item.status) }
      </div>
    )
  });

  return (
    <div className='tpl-grid tpl-grid_xs-ratio_1-1 tpl-grid_s-ratio_1-1-1 tpl-grid_m-ratio_1-1-1-1 tpl-grid_col-gap_half tpl-grid_row-gap_half'>
      {list}
    </div>
  );
}

export default ProgrammCards;
