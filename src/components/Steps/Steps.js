import React from 'react';

import './Steps.css';
import { Text } from '@gpn-design/uikit/Text';
import { IconCheck } from '@gpn-design/uikit/IconCheck';

function Steps(props) {
  const { steps, className } = props;
  let x = true;

  let list = steps.map((item, index) => {
    if(item.active) {
      x = false;
      return (
        <div className={`Steps__item Steps__item_state_active pt-icon-plus pt-icon-plus_vertical-align_center ${className}`}>
          <Text size='s' view='primary' display='inline-block' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs'>{index + 1}</Text>
          <Text size='s' view='primary' display='inline-block'>{item.name}</Text>
        </div>
      );
    } else if(x) {
      return (
        <div className={`Steps__item Steps__item_state_done pt-icon-plus pt-icon-plus_vertical-align_center ${className}`}>
          <IconCheck size='s' view='success' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs' />
          <Text size='s' view='primary' display='inline-block'>{item.name}</Text>
        </div>
      );
    } else if(!x) {
      return (
        <div className={`Steps__item pt-icon-plus pt-icon-plus_vertical-align_center ${className}`}>
          <Text size='s' view='ghost' display='inline-block' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs'>{index + 1}</Text>
          <Text size='s' view='ghost' display='inline-block'>{item.name}</Text>
        </div>
      );
    } else return ''
  })
  return (
    <div className='Steps'>{ list }</div>
  );
}

export default Steps;
