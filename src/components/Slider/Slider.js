import React from 'react';

import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { IconArrowLeft } from '@gpn-design/uikit/IconArrowLeft';
import { IconArrowRight } from '@gpn-design/uikit/IconArrowRight';

import './Slider.css';

function Slider(props) {

  return (
    <div className='Slider'>
      <Button size='l' view='clear' onlyIcon={true} iconLeft={IconArrowLeft} className='Slider__prev' />
      <div className='Slider__content'>
        <div className='Slider__item'>
          <div className='Slider__image'></div>
          <Text size='s' view='secondary' align='center' className='Slider__description'>Какой-то текст про то, какие задачи можно очень круто и быстро решать с помощью сервиса</Text>
        </div>
      </div>
      <Button size='l' view='clear' onlyIcon={true} iconLeft={IconArrowRight} className='Slider__next' />
      <div className='Slider__nav'>
        <div className='Slider__nav-item Slider__nav-item_active'></div>
        <div className='Slider__nav-item'></div>
        <div className='Slider__nav-item'></div>
      </div>
    </div>
  );
}

export default Slider;
