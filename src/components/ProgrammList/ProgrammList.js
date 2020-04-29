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
  const getUser = (name) => {
    let user = team.filter(item => item.name === name)[0];
    
    return <User view='clear' size='s' avatarUrl={ user.avatar } name={ name } />
  }

  const list = programmList.map(item => {

    return <tr className='pt-table__row' onClick={() => { history.push(`/digital-driller/programm/${item.id}`) }}>
      <Text size='m' view='primary' weight='semibold' as='td'>{item.type}</Text>
      <td>{ getBush(item.bush, item.well) }</td>
      <td>{ getBadge(item.stage) }</td>
      <td>{ getUser(item.curator) }</td>
    </tr>
  });

  return (
    <table className='programm-list pt-table pt-table_stripe_even'>
      <tr>
        <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Месторождение</Text>
        <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Куст и скважина</Text>
        <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Этап процесса</Text>
        <Text as='th' view='secondary' size='2xs' weight='bold' transform='uppercase' spacing='xs'>Куратор</Text>
      </tr>
      {list}
    </table>
  );
}

export default ProgrammList;
