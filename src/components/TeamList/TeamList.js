import React from 'react';
import { Text, Badge } from '@gpn-design/uikit';

import './TeamList.css';

function TeamList(props) {
  const { tocList, team } = props;

  const list = team.map(item => {
    let badge;
    let isDone = 0;
    
    tocList.forEach(section => {
      if(section.status !== 'done' && section.member === item.name)
        isDone--;
      else if(section.status === 'done' && section.member === item.name)
        isDone++;
    });
    
    if (isDone > 0)
      badge = <Badge size='m' view='filled' status='success' label='Готово' />;
    else
      badge = <Badge size='m' view='filled' status='system' label={'Подготовить до ' + item.deadline} />;

    return (
      <div className='team-member' key={item.name}>
        <div className='decorator decorator_distribute_between decorator_indent-b_xs'>
          <Text size='m' view='primary' weight='bold'>{item.position}</Text>
          {badge}
        </div>
        <Text size='m' view='primary'>{item.company} | @{item.name}</Text>
      </div>);
  });

  return (
    <React.Fragment>
      {list}
    </React.Fragment>
  );
}

export default TeamList;
  