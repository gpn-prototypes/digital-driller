import React, { useState } from 'react';

import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconAlignLeft } from '@gpn-design/uikit/IconAlignLeft';
import { IconAlert } from '@gpn-design/uikit/IconAlert';
import { IconComment } from '@gpn-design/uikit/IconComment';
import { IconTrash } from '@gpn-design/uikit/IconTrash';
import { IconTable } from '@gpn-design/uikit/IconTable';
import { IconLink } from '@gpn-design/uikit/IconLink';
import { IconPhoto } from '@gpn-design/uikit/IconPhoto';
import { Text } from '@gpn-design/uikit/Text';

import ContentBlockHeader from './Type/Header';
import ContentBlockParagraph from './Type/Paragraph';
import ContentBlockInformer from './Type/Informer';
import ContentBlockTable from './Type/Table';
import ContentBlockList from './Type/List';
import ContentBlockImage from './Type/Image';
import CommentPopup from '../CommentPopup/CommentPopup';

import './ContentBlock.css';
import IMGTemplate from '../../images/Профиль_ствола_скважины.jpg';

function ContentBlock(props) {
  const { isCommentable, isEditable, size, type, tableHeader, tableBody, tableFooter, tableName, listItems, adviceID, comments = 0, children } = props;
  const [isCommentVisible, setCommentVisibility] = useState(false);
  const [isNewBlockPopupVisible, setNewBlockPopupVisibility] = useState(false);
  const [blockList, setBlockList] = useState([{ type, children }]);
  let commentPopup = <CommentPopup isEditable={isEditable} isVisible={isCommentVisible} count={0} />;
  let newBlockPopup = <div className={`newblockpopup${isNewBlockPopupVisible ? ' newblockpopup_visible': ''}`}>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { setNewBlockPopupVisibility(false); placeNewBlock('paragraph', false); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Текстовый блок</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { setNewBlockPopupVisibility(false); placeNewBlock('header', false); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Заголовок</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { setNewBlockPopupVisibility(false); placeNewBlock('list', ['']); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Список</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { setNewBlockPopupVisibility(false); placeNewBlock('informer', false); }}>
          <IconAlert size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Примечание</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' disabled>
          <IconTable size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='ghost'>Таблица</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' disabled>
          <IconLink size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='ghost'>Графики, модели и диаграммы</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { setNewBlockPopupVisibility(false); placeNewBlock('image', <img src={IMGTemplate} alt=' ' />); }}>
          <IconPhoto size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Изображения</Text>
        </div>
      </div>;

  const placeNewBlock = (type, children) => {
    const newBlock = [...blockList, { type: type, children: children }];
    setBlockList(newBlock);
  }

  const deleteBlock = (index) => () => {
    const newList = blockList;
    newList.splice(index, 1);
    setBlockList([...newList]);
  }

  const showCommentPopup = (e) => {
    const handleDocumentClick = (e) => {  
      if(!isCommentVisible) {
        let popup = document.querySelector(`.commentpopup_visible`);
        if(popup)
          if(!popup.contains(e.target)) closePopup();
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
      setTimeout(() => {
        let input = document.querySelector(`.commentpopup_visible input`);
        if(input) input.focus();
      }, 100);
    }
  };

  const showNewBlockPopup = (e) => {
    const handleDocumentClick = (e) => {  
      if(!isNewBlockPopupVisible) {
        let popup = document.querySelector(`.newblockpopup_visible`);
        if(popup)
          if(!popup.contains(e.target)) closePopup();
      }
    }
    const closePopup = () => {
      setNewBlockPopupVisibility(false);
      document.removeEventListener('click', handleDocumentClick, false);
    }
    
    if(isNewBlockPopupVisible) {
      closePopup();
    } else {
      setNewBlockPopupVisibility(true);
      document.addEventListener('click', handleDocumentClick);
    }
  };

  const getNewBlock = (type, children, index) => {
    let addButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconAdd} form='round' tabIndex={-1} className='' onClick={(e) => showNewBlockPopup(e)} />;
    let deleteButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconTrash} form='round' tabIndex={-1} className='' onClick={ deleteBlock(index) } />;
    let commentButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconComment} form='round' tabIndex={-1} className='' onClick={(e) => showCommentPopup(e)} />;

    if(type === 'paragraph') return <ContentBlockParagraph isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    else if(type === 'informer') return <ContentBlockInformer isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    else if(type === 'header') return <ContentBlockHeader isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    else if(type === 'table') return <ContentBlockTable size={size} tableName={tableName} tableHeader={tableHeader} tableBody={tableBody} tableFooter={tableFooter} isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    else if(type === 'list') return <ContentBlockList listItems={listItems} isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    else if(type === 'image') return <ContentBlockImage isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} key={index} />;
    
    else return null
  }

  return (
    <React.Fragment>
      {blockList.map((item, index) => getNewBlock(item.type, item.children, index))}
    </React.Fragment>
  );
}

export default ContentBlock;
  