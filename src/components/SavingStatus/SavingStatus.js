import React, { useState, useEffect } from 'react';
import { Text, IconCheck } from '@gpn-design/uikit';

import './SavingStatus.css';

function SavingStatus() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    let timer;

    if(counter == 1) timer = setInterval(() => setCounter(counter - 1), 2000);
    else timer = setInterval(() => setCounter(counter + 1), 5000);
    
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <Text size='s' view='secondary' className='pt-icon-plus pt-icon-plus_vertical-align_center'>
      <div style={{ display: counter ? 'block' : 'none' }} className='progress-icon pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs' />
      <div style={{ display: counter ? 'none' : 'flex' }} className='decorator decorator_vertical-align_center'>
        <IconCheck size='s' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_2xs' />
      </div>
      {counter == 1 ? 'Сохраняем' : 'Черновик сохранен'}
    </Text>
  );
}

export default SavingStatus;
