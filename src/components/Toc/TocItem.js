import React from 'react';

import { IconCheck, IconAlert } from '@gpn-design/uikit';

function TocItem(props) {
  const { status, content, isMine } = props;
  let linkName;

  if (isMine)
    linkName = (
      <div className='toc__name toc__name_mine'>
        {content}<br/>
      </div>);
  else
    linkName = (
      <div className='toc__name'>
        {content}
      </div>);
    
  if (status === 'done')
    return (
      <a href={`#${content}`} className='toc__item toc__item_status_success pt-icon-plus'>
        <IconCheck size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        {linkName}
      </a>);
  else if (status === 'warning')
    return (
      <a href={`#${content}`} className='toc__item toc__item_status_warning pt-icon-plus'>
        <IconAlert size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        {linkName}
      </a>);
  else if (status === 'in progress')
    return (
      <a href={`#${content}`} className='toc__item toc__item_status_progress decorator decorator_indent-l_xl'>
        {linkName}
      </a>);
  else return null;
}

export default TocItem;
