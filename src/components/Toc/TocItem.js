import React from 'react';
import { IconCheck } from '@gpn-design/uikit/IconCheck';
import { IconAlert } from '@gpn-design/uikit/IconAlert';

function TocItem(props) {
  const { status, content, isMine, sectionName } = props;
  let itemInfo = {
    name: '',
    link: '',
    icon: ''
  };

  if (sectionName) itemInfo.link = `#${sectionName}: ${content}`;
  else itemInfo.link = `#${content}`;


  if (status === 'Готово' || status === 'Согласован')
    itemInfo.icon = <IconCheck size='s' view='success' />;
  else if (status === 'Непримененный совет' || status === 'На доработку')
    itemInfo.icon = <IconAlert size='s' view='warning' />;
  
  return (
    <a href={itemInfo.link} className='toc__item pt-icon-plus'>
      <div className='toc__icon pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs'>
        {itemInfo.icon}
      </div>
      <div className={`toc__name ${isMine ? 'toc__name_mine' : ''}`}>
        {content}
        {isMine ? <br /> : ''}
      </div>
    </a>
  );
}

export default TocItem;
