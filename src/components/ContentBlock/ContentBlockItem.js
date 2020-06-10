import React, { useState, useContext } from 'react';

import { ProgrammInfoContext } from '../../context/ProgrammInfoContext';

import { Button } from '@gpn-design/uikit/Button';
import { IconAdd } from '@gpn-design/uikit/IconAdd';
import { IconAlignLeft } from '@gpn-design/uikit/IconAlignLeft';
import { IconAlert } from '@gpn-design/uikit/IconAlert';
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

function ContentBlockItem(props) {
  const { isCommentable, isEditable,
          size, type,
          tableHeader, tableBody, tableFooter, tableName,
          listItems,
          adviceID, commentID, children,
          newParagraphHandler, newHeaderHandler, newListHandler, newInformerHandler, newImageHandler,
          deleteButtonHandler } = props;
          
  const { showRightBlind, hideAllBlinds, setCommentBlind } = useContext(ProgrammInfoContext);
  const [isNewBlockPopupVisible, setNewBlockPopupVisibility] = useState(false);
  const [blockList, setBlockList] = useState([{ type, children }]);
  
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

  if(type === 'paragraph') return <ContentBlockParagraph commentID={commentID} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'informer') return <ContentBlockInformer commentID={commentID} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'header') return <ContentBlockHeader commentID={commentID} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'table') return <ContentBlockTable size={size} tableName={tableName} tableHeader={tableHeader} tableBody={tableBody} tableFooter={tableFooter} isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'list') return <ContentBlockList listItems={listItems} commentID={commentID} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
  else if(type === 'image') return <ContentBlockImage commentID={commentID} isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={children} />;
}

export default ContentBlockItem;
  