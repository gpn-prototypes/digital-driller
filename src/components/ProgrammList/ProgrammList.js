import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';
import { User } from '@gpn-design/uikit/User';
import { IconArrowRight } from '@gpn-design/uikit/IconArrowRight';

import './ProgrammList.css';
import { team } from '../../mocks/team';

function ProgrammList(props) {
  const {programmList} = props;
  const history = useHistory();

  const getBadge = (stage) => {
    let badgeStatus = 'system';
    if (stage === 'Сформирована' || stage === 'Завершено')
      badgeStatus = 'success';
    else if (stage === 'Согласование')
      badgeStatus = 'normal';
    
      return <Badge size='m' view='stroked' status={badgeStatus} label={stage} />;
  }
  const getBush = (bush, well) => {
    return (
      <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
        <Text size='m' view='secondary'>{ bush }</Text>
        <IconArrowRight size='xs' view='secondary' className='decorator decorator_indent-h_xs'/>
        <Text size='m' view='secondary'>{ well }</Text>
      </div>
    )
  }
  const getCurator = (programmTeam) => {
    let userName = programmTeam.filter(item => item.role === 'Куратор')[0];
    let user = team.filter(item => item.name === userName.name)[0];
    return <User view='clear' size='s' avatarUrl={ user.avatar } name={ user.name } />
  }

  const list = programmList.map((item, index) => {
    return <tr className='pt-table__row' onClick={() => { history.push(`/digital-driller/programm/${item.id}`) }} key={`${index}-${item.name}`}>
      <Text size='m' view='primary' weight='semibold' as='td'>{item.type}</Text>
      <td>{ getBush(item.bush, item.well) }</td>
      <td>{ getBadge(item.stage) }</td>
      <td>{ getCurator(item.team) }</td>
    </tr>
  });

  return (
    <table className='programm-list pt-table pt-table_stripe_even'>
      <thead>
        <tr>
          <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Тип скважины</Text>
          <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Куст и скважина</Text>
          <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Этап процесса</Text>
          <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Куратор</Text>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  );
}

export default ProgrammList;
