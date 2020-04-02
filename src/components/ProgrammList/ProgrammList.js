import React from 'react';
import { useHistory } from 'react-router-dom';
import { Text, IconArrowRight, Badge } from '@gpn-design/uikit';

import './ProgrammList.css';

function ProgrammList(props) {
  const {programmList, role} = props;
  const history = useHistory();

  const list = programmList.map(item => {
    const openProgramm = () => {
      history.push(`/${role}/programm/${item.id}`)
    };

    let status = <Badge size='m' view='filled' status='system'>{item.stage}</Badge>;
    if (item.stage === 'Подготовка' || item.stage === 'Согласование' || item.stage === 'Бурение')
      status = <Badge size='m' view='filled' status='normal' label={item.stage + ' до ' + item.deadline} />;
    else if (item.stage === 'Завершено')
      status = <Badge size='m' view='filled' status='success' label={item.stage + ' ' + item.deadline} />;

    return <tr className='pt-table__row' onClick={openProgramm}>
      <Text size='s' view='primary' as='td'>{item.field}</Text>
      <td>
        <div className='decorator decorator_distribute_left decorator_vertical-align_center'>
          <Text size='s' view='ghost'>{item.bush}</Text>
          <IconArrowRight size='xs' view='ghost' className='decorator decorator_indent-h_xs'/>
          <Text size='s' view='ghost'>{item.well}</Text>
        </div>
      </td>
      <td>{status}</td>
      <td><Text size='s' view='primary'>{item.curator}</Text></td>
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
