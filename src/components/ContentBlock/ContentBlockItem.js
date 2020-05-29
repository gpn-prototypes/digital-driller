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

function ContentBlockItem(props) {
  const { isCommentable, isEditable,
          size, type,
          tableHeader, tableBody, tableFooter, tableName,
          listItems,
          adviceID, comments = 0, children,
          newParagraphHandler, newHeaderHandler, newListHandler, newInformerHandler, newImageHandler,
          deleteButtonHandler } = props;
  
  const [isCommentVisible, setCommentVisibility] = useState(false);
  const [isNewBlockPopupVisible, setNewBlockPopupVisibility] = useState(false);
  const [blockList, setBlockList] = useState([{ type, children }]);
  
  let commentPopup = <CommentPopup isEditable={isEditable} isVisible={isCommentVisible} count={0} />;
  let newBlockPopup = <div className={`newblockpopup${isNewBlockPopupVisible ? ' newblockpopup_visible': ''}`}>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { newParagraphHandler(); hideNewBlockPopup(); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Текстовый блок</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { newHeaderHandler(); hideNewBlockPopup(); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Заголовок</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { newListHandler(); hideNewBlockPopup(); }}>
          <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Список</Text>
        </div>
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { newInformerHandler(); hideNewBlockPopup(); }}>
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
        <div className='newblockpopup-item pt-icon-plus pt-icon-plus_vertical-align_center' onClick={() => { newImageHandler(); hideNewBlockPopup(); }}>
          <IconPhoto size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
          <Text size='s' view='primary'>Изображения</Text>
        </div>
      </div>;

  let addButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconAdd} form='round' tabIndex={-1} className='' onClick={(e) => showNewBlockPopup(e)} />;
  let deleteButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconTrash} form='round' tabIndex={-1} className='' onClick={ () => deleteButtonHandler() } />;
  let commentButton = <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconComment} form='round' tabIndex={-1} className='' onClick={(e) => showCommentPopup(e)} />;

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

  const handleDocumentClick = (e) => {  
    if(!isNewBlockPopupVisible) {
      let popup = document.querySelector(`.newblockpopup_visible`);
      if(popup)
        if(!popup.contains(e.target)) hideNewBlockPopup();
    }
  }
  const hideNewBlockPopup = () => {
    setNewBlockPopupVisibility(false);
    document.removeEventListener('click', handleDocumentClick, false);
  };

  const showNewBlockPopup = (e) => {
    if(isNewBlockPopupVisible) {
      hideNewBlockPopup();
    } else {
      setNewBlockPopupVisibility(true);
      document.addEventListener('click', handleDocumentClick(e));
    }
  };

  if(type === 'paragraph') return <ContentBlockParagraph isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'informer') return <ContentBlockInformer isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'header') return <ContentBlockHeader isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'table') return <ContentBlockTable size={size} tableName={tableName} tableHeader={tableHeader} tableBody={tableBody} tableFooter={tableFooter} isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'list') return <ContentBlockList listItems={listItems} isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'image') return <ContentBlockImage isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={children} />;
}

export default ContentBlockItem;
  