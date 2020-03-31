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
      <a href={`#${content}`} className='toc__item pt-icon-plus text text_size_s text_view_success decorator decorator_indent-b_l'>
        <IconCheck size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        {linkName}
      </a>);
  else if (status === 'warning')
    return (
      <a href={`#${content}`} className='toc__item pt-icon-plus text text_size_s text_view_warning decorator decorator_indent-b_l'>
        <IconAlert size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        {linkName}
      </a>);
  else if (status === 'in progress')
    return (
      <a href={`#${content}`} className='toc__item text text_size_s text_view_secondary decorator decorator_indent-b_l decorator_indent-l_xl'>
        {linkName}
      </a>);
  else return null;
}

export default TocItem;
