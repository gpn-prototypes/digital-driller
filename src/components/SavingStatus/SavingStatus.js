import React, { useState, useEffect } from 'react';
import { Text, IconCheck } from '@gpn-design/uikit';

import './SavingStatus.css';

function SavingStatus() {
  const [status, setStatus] = useState(0);
  let isSaved = false;
  let block;

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(() => {
        if(isSaved) {
          isSaved = false;
          block = (
            <React.Fragment>
            <div className='progress-icon pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs'></div>
            Сохраняем</React.Fragment>
          );
        } else {
          isSaved = true;
          block = (
            <React.Fragment>
            <IconCheck size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs' />
            Черновик сохранен</React.Fragment>
          );
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text size='s' view='secondary' className='pt-icon-plus pt-icon-plus_vertical-align_center'>
      <div className='progress-icon pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs'></div>
      Сохраняем
    </Text>
  );
}

export default SavingStatus;
