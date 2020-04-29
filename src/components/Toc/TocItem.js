import React from 'react';
import { IconCheck } from '@gpn-design/uikit/IconCheck';
import { IconAlert } from '@gpn-design/uikit/IconAlert';

function TocItem(props) {
  const { status, content, isMine, role, sectionName } = props;
  let itemInfo = {
    name: '',
    link: '',
    linkClassName: '',
    icon: ''
  };

  if (sectionName) itemInfo.link = `#${sectionName}: ${content}`;
  else itemInfo.link = `#${content}`;

  if (isMine) itemInfo.name = <React.Fragment>{content}<br/></React.Fragment>;
  else itemInfo.name = content;


  if (status === 'done' && role === 'geologist') {
    itemInfo.icon = <IconCheck size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />;
    itemInfo.linkClassName = 'toc__item_status_success pt-icon-plus';
  } else if (status === 'warning' && role === 'geologist') {
    itemInfo.icon = <IconAlert size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />;
    itemInfo.linkClassName = 'toc__item_status_warning pt-icon-plus';
  } else {
    itemInfo.icon = '';
    itemInfo.linkClassName = 'toc__item_status_progress decorator decorator_indent-l_xl';
  }
  
  return (
    <a href={itemInfo.link} className={`toc__item ${itemInfo.linkClassName}`}>
      {itemInfo.icon}
      <div className={`toc__name ${isMine ? 'toc__name_mine' : ''}`}>
        {itemInfo.name}
      </div>
    </a>
  );
}

export default TocItem;
