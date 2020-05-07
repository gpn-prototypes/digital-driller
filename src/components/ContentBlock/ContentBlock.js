import React, { useState } from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { Text } from '@gpn-design/uikit/Text';
import { Informer } from '@gpn-design/uikit/Informer';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconComment } from '@gpn-design/uikit/IconComment';
import { IconAlert } from '@gpn-design/uikit/IconAlert';
import { IconAlignLeft } from '@gpn-design/uikit/IconAlignLeft';
import { IconTable } from '@gpn-design/uikit/IconTable';
import { IconLink } from '@gpn-design/uikit/IconLink';
import { IconPhoto } from '@gpn-design/uikit/IconPhoto';

import Field from '../Field/Field';
import CommentPopup from '../CommentPopup/CommentPopup';
import AdvicePopup from '../AdvicePopup/AdvicePopup';
import ContentBlockH3 from './Type/H3';
import ContentBlockText from './Type/Text';
import ContentBlockTable from './Type/Table';
import ContentBlockTablename from './Type/Tablename';
import ContentBlockImage from './Type/Image';
import ContentBlockListname from './Type/Listname';
import ContentBlockListitem from './Type/Listitem';
import ContentBlockInformer from './Type/Informer';

import './ContentBlock.css';
import IMGTemplate from '../../images/Профиль_ствола_скважины.jpg';

function ContentBlock(props) {
  const { isEditable, size, type, className = '', adviceID, comments = 0, children } = props;
  const [isCommentVisible, setCommentVisibility] = useState(false);
  const [isNewBlockPopupVisible, setNewBlockPopupVisibility] = useState(false);
  const [newBlocksList, setNewBlockList] = useState([]);
  let block, rightButton, rightPopup;
  
  // работа внутри попапа добавления ного блока
  const placeNewBlock = (type) => {
    const newBlock = [{ type: type, value: '' }, ...newBlocksList];
    setNewBlockList(newBlock);
    setNewBlockPopupVisibility(changeNewBlockPopupStatus);
  }

  const newBlockHandleChange = (index) => ({value}) => {
    const newBlocks = newBlocksList.splice(index, 1, {...newBlocksList[index], value} ); // тут он должени заменить элемент по индексу на тотже только с новый value
    setNewBlockList([...newBlocks]);
  }
  
  const getNewBlock = (info, index) => {
    if(info.type === 'text') 
      return (<ContentBlock onChange={newBlockHandleChange(index)} isEditable={true} type='text' key={index}><Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue={info.value} /></ContentBlock>);
    else if(info.type === 'informer')
      return (
        <ContentBlock isEditable={true} type='informer' onChange={newBlockHandleChange(index)} key={index}>
          <Informer status='system' view='filled'>
            <Text size='m' view='primary' weight='bold'>Примечание</Text>
            <Field width='full' size='m' view='clear' type='textarea' maxRows='10000' placeholder='Начните писать' dValue={info.value} />
          </Informer>
        </ContentBlock>);
    else if(info.type === 'image')
      return (
        <ContentBlock isEditable={true} type='image' onChange={newBlockHandleChange(index)} key={index}>
          <img src={IMGTemplate} alt=' ' />
        </ContentBlock>);
  }
  
  // скрывание попапа нового блока 
  const changeNewBlockPopupStatus = () => {
    if (isNewBlockPopupVisible === true) return false;
                                    else return true;
  };

 // скрывание комментариев
  const showCommentPopup = () => {
    const handleDocumentClick = (e) => {
      
      if(!isCommentVisible) {
        let popup = document.querySelector(`.commentpopup_visible`);
        if(!popup.contains(e.target)) {
          closePopup();
        }
      }
    }
    const closePopup = () => {
      setCommentVisibility(false);
      document.removeEventListener('click', handleDocumentClick, false);
    }
    
    if(isCommentVisible) {
      closePopup();
    } else {
      setCommentVisibility(true);
      document.addEventListener('click', handleDocumentClick);
    }
  };

  let sizeClassName = size === 'full' ? `Article__section_size_full ${className}` : className;
  let leftButton, leftPopup, advicePopup, adviceButton;
  if (comments > 0) {
    rightButton = <Button view='ghost' size='s' iconSize='s' label={comments} className='block__commentbutton block__commentbutton_visible' onClick={showCommentPopup} />;
    rightPopup = <CommentPopup isEditable={isEditable} isVisible={isCommentVisible} count={comments} />;
  } else {
    rightButton = <Button view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconComment} className='block__commentbutton' onClick={showCommentPopup} />;
    rightPopup = <CommentPopup isEditable={isEditable} isVisible={isCommentVisible} count={comments}  />;
  }

  if(isEditable) {
    leftButton = <Button view='ghost' size='s' iconOnly={true} iconSize='s' iconLeft={IconAdd} className='block__addnewblockbutton' onClick={() => {setNewBlockPopupVisibility(changeNewBlockPopupStatus)}} />;
    leftPopup = 
      <div className={`newblockpopup ${isNewBlockPopupVisible ? 'newblockpopup_visible': ''}`}>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { placeNewBlock('text') }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Текстовый блок</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { placeNewBlock('informer') }}>
          <IconAlert size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Примечание</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' disabled style={{opacity: '0.4'}}>
          <IconTable size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Таблица</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' disabled style={{opacity: '0.4'}}>
          <IconLink size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Графики, модели и диаграммы</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { placeNewBlock('image') }}>
          <IconPhoto size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Изображения</Text>
        </div>
      </div>;
  }
  if(adviceID) {
    advicePopup = <AdvicePopup id={adviceID} isEditable={isEditable} />;
    adviceButton = <Button view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconAlert} className='block__avicebutton' />;
  }

  if(type === 'h3')             block = <ContentBlockH3 leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} className={sizeClassName} children={children} />;
  else if(type === 'text')      block = <ContentBlockText leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} advicePopup={advicePopup} adviceButton={adviceButton} className={sizeClassName} children={children} />;
  else if(type === 'table')     block = <ContentBlockTable className={sizeClassName} children={children} />;
  else if(type === 'tablename') block = <ContentBlockTablename className={sizeClassName} children={children} />;
  else if(type === 'image')     block = <ContentBlockImage leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} className={sizeClassName} children={children} />;
  else if(type === 'listname')  block = <ContentBlockListname leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} className={sizeClassName} children={children} />;
  else if(type === 'listitem')  block = <ContentBlockListitem leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} className={sizeClassName} children={children} />;
  else if(type === 'informer')  block = <ContentBlockInformer leftButton={leftButton} rightButton={rightButton} rightPopup={rightPopup} leftPopup={leftPopup} className={sizeClassName} children={children} />;

  return (
    <React.Fragment>
      {block}
      {newBlocksList.map((item, index) => getNewBlock(item, index))}
    </React.Fragment>
  );
}

export default ContentBlock;
  