import React, { useContext } from 'react';

import { ProgrammInfoContext } from '../../context/ProgrammInfoContext';

import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { IconUser } from '@gpn-design/uikit/IconUser';
import { IconThumbUp } from '@gpn-design/uikit/IconThumbUp';
import { IconTest } from '@gpn-design/uikit/IconTest';
import { IconComment } from '@gpn-design/uikit/IconComment';
import { IconBackward } from '@gpn-design/uikit/IconBackward';
import Toc from '../Toc/Toc';

import './Sidebar.css';

function Sidebar(props) {
  const { programmInfo, teamOnClick, commentOnClick, lessonOnClick, approveOnClick } = props;
  const { hideAllBlinds } = useContext(ProgrammInfoContext);

  return (
    <React.Fragment>
      <div className='Sidebar'>
        <Button size='m' view='clear' iconLeft={IconBackward} onlyIcon={true} className='Sidebar__close' onClick={ hideAllBlinds } />
        <ul className='Sidebar__menu decorator decorator_indent-b_l'>
          <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={ teamOnClick }>
            <IconUser size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
            <Text size='s' view='primary'>Команда программы</Text>
          </li>
          <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={ lessonOnClick }>
            <IconTest size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
            <Text size='s' view='primary'>Извлеченные уроки</Text>
          </li>
          <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={ commentOnClick }>
            <IconComment size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
            <Text size='s' view='primary'>Комментарии</Text>
          </li>
          { programmInfo.stage === 'Согласование' ?
            <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={ approveOnClick }>
              <IconThumbUp size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
              <Text size='s' view='primary'>Согласование</Text>
            </li>
          : ''}
        </ul>
        
        <Toc programmInfo={ programmInfo } />
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
