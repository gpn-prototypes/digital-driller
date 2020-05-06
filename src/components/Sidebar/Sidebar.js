import React from 'react';

import { Text } from '@gpn-design/uikit/Text';
import { IconUser } from '@gpn-design/uikit/IconUser';
import { IconThumbUp } from '@gpn-design/uikit/IconThumbUp';
import { IconTest } from '@gpn-design/uikit/IconTest';
import { IconComment } from '@gpn-design/uikit/IconComment';
import Toc from '../Toc/Toc';

import './Sidebar.css';

function Sidebar(props) {
  const { programmInfo } = props;

  return (
    <div className='Sidebar'>
      <ul className='Sidebar__menu decorator decorator_indent-b_l'>
        <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => {}}>
          <IconUser size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Команда программы</Text>
        </li>
        <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => {}}>
          <IconTest size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Изученные уроки</Text>
        </li>
        <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => {}}>
          <IconComment size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Комментарии</Text>
        </li>
        { programmInfo.stage === 'Согласование' ?
          <li className='Sidebar__menu-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => {}}>
            <IconThumbUp size='s' view='primary' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
            <Text size='s' view='primary'>Согласование</Text>
          </li>
        : ''}
      </ul>
      
      <Toc programmContent={ programmInfo.content } />
    </div>
  );
}

export default Sidebar;
