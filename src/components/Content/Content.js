import React from 'react';
import { useHistory } from 'react-router-dom';

import { Text } from '@gpn-design/uikit/Text';
import { IconArrowRight } from '@gpn-design/uikit/IconArrowRight';
import { Avatar } from '@gpn-design/uikit/Avatar';
import { Badge } from '@gpn-design/uikit/Badge';
import { Button } from '@gpn-design/uikit/Button';

import { team } from '../../mocks/team';
import './Content.css';

function Content(props) {
  const {size, centered, children} = props;
  
  return (
    <div className={`content content_size_${size} content_centered decorator decorator_space-v_3xl`}>
      {children}
    </div>
  );
}

export default Content;
