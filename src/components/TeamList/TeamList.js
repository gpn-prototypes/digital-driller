import React from 'react';
import { Text, Badge } from '@gpn-design/uikit';

import './TeamList.css';

function TeamList(props) {
  const { tocList, team } = props;

  const list = team.map(item => {
    let badge;
    let isDone = true;
    
    tocList.forEach(section => {
      if(section.status !== 'done' && section.member === item.name)
        isDone = false;
    });
    
    if (isDone)
      badge = <Badge wpSize='m' view='filled' status='success'>Готово</Badge>;
    else
      badge = <Badge wpSize='m' view='filled' status='system'>{'Подготовить до ' + item.deadline}</Badge>;

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
  