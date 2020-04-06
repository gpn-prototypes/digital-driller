import React from 'react';
import { Text, Badge } from '@gpn-design/uikit';

import { tocList, team } from '../../mocks/newProgramm';

import './TeamList.css';

function TeamList(props) {
  const { role } = props;

  const list = team.map(item => {
    let badge;
    let isDone = 0, isMe = false;
    
    tocList.forEach(section => {
      if(section.status !== 'done' && section.member === item.role)
        isDone--;
      else if(section.status === 'done' && section.member === item.role && role === 'geologist')
        isDone++;
    });
    
    if (isDone > 0) badge = { status: 'success', label: 'готово' };
    else            badge = { status: 'system', label: `Подготовить до ${item.deadline}` };
    
    if (item.role === role) isMe = true;

    return (
      <div className='team-member' key={item.name}>
        <div className='decorator decorator_distribute_between decorator_indent-b_xs'>
          <Text size='m' view='primary' weight='bold'>{item.position}</Text>
          <Badge size='m' view='filled' status={badge.status} label={badge.label} />
        </div>
        <Text size='m' view='primary'>
          {item.company} | 
          <Text size='m' view={isMe ? 'brand' : 'primary'} weight={isMe ? 'bold' : 'regular'} display='inline-block'>@{item.name}</Text>
        </Text>
      </div>);
  });

  return (
    <React.Fragment>
      {list}
    </React.Fragment>
  );
}

export default TeamList;
  