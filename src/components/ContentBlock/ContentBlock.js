import React from 'react';
import { Button, IconAdd, IconComment, IconAlert } from '@gpn-design/uikit';
import AdvicePopup from '../AdvicePopup/AdvicePopup';
import NewBlockPopup from '../NewBlockPopup/NewBlockPopup';
import H3 from './Type/H3';
import Text from './Type/Text';
import Table from './Type/Table';
import Tablename from './Type/Tablename';
import Image from './Type/Image';
import Listname from './Type/Listname';
import Listitem from './Type/Listitem';
import Informer from './Type/Informer';

import './ContentBlock.css';

function ContentBlock(props) {
  const { isEditable, size, type, className = '', adviceID, children } = props;
  let sizeClassName = size === 'full' ? `content__main_size_full ${className}` : className;
  let leftButton, leftPopup, advicePopup, adviceButton;
  let rightButton = <Button view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconComment} className='block__commentbutton' />;

  if(isEditable) {
    leftButton = <Button view='ghost' size='s' iconOnly={true} iconSize='s' iconLeft={IconAdd} className='block__addnewblockbutton' />;
    leftPopup = <NewBlockPopup />;
  }
  if(adviceID) {
    advicePopup = <AdvicePopup id={adviceID} isEditable={isEditable} />;
    adviceButton = <Button view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconAlert} className='block__avicebutton' />;
  }

  if(type === 'h3')
    return (<H3 leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} className={sizeClassName} children={children} />)
  else if(type === 'text')
    return (<Text leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} advicePopup={advicePopup} adviceButton={adviceButton} className={sizeClassName} children={children} />)
  else if(type === 'table')
    return (<Table className={sizeClassName} children={children} />)
  else if(type === 'tablename')
    return (<Tablename className={sizeClassName} children={children} />)
  else if(type === 'image')
    return (<Image leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} className={sizeClassName} children={children} />)
  else if(type === 'listname')
    return (<Listname leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} className={sizeClassName} children={children} />)
  else if(type === 'listitem')
    return (<Listitem leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} className={sizeClassName} children={children} />)
  else if(type === 'informer')
    return (<Informer leftButton={leftButton} rightButton={rightButton} leftPopup={leftPopup} className={sizeClassName} children={children} />)
  else return ('');
}

export default ContentBlock;
  