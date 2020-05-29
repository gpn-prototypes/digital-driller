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
import ContentBlockItem from './ContentBlockItem';

function ContentBlock(props) {
  const { isCommentable = false, isEditable = false, size = false, type = false, tableHeader = false, tableBody = false, tableFooter = false, tableName = false, listItems = false, adviceID, comments = 0, children } = props;
  const [isCommentVisible, setCommentVisibility] = useState(false);
  const [isNewBlockPopupVisible, setNewBlockPopupVisibility] = useState(false);
  const [blockList, setBlockList] = useState([{ isCommentable, isEditable, size, type, tableHeader, tableBody, tableFooter, tableName, listItems, children }]);
  
  const placeNewBlock = (thisIsCommentable = false, thisIsEditable = false, thisSize = false, thisType = false, thisTableHeader = false, thisTableBody = false, thisTableFooter = false, thisTableName = false, thisListItems = false, thisChildren, index) => {
    let newBlock = [...blockList];
    newBlock.splice(index+1, 0, { isCommentable: thisIsCommentable, isEditable: thisIsEditable, size: thisSize, type: thisType, tableHeader: thisTableHeader, tableBody: thisTableBody, tableFooter: thisTableFooter, tableName: thisTableName, listItems: thisListItems, children: thisChildren });
    setBlockList(newBlock);
  }

  const deleteBlock = (index) => () => {
    console.log(111);
    const newList = blockList;
    newList.splice(index, 1);
    setBlockList([...newList]);
  }

  return (
    <React.Fragment>
      {blockList.map((item, index) => <ContentBlockItem
                                        isCommentable={item.isCommentable}
                                        isEditable={item.isEditable}
                                        size={item.size}
                                        type={item.type}
                                        tableHeader={item.tableHeader}
                                        tableBody={item.tableBody}
                                        tableFooter={item.tableFooter}
                                        tableName={item.tableName}
                                        listItems={item.listItems}
                                        comments={0}
                                        children={item.children}
                                        newParagraphHandler={() => placeNewBlock(isCommentable, isEditable, false, 'paragraph', false, false, false, false, false, false, index)}
                                        newHeaderHandler={() => placeNewBlock(isCommentable, isEditable, false, 'header', false, false, false, false, false, false, index)}
                                        newListHandler={() => placeNewBlock(isCommentable, isEditable, false, 'list', false, false, false, false, [''], false, index)}
                                        newInformerHandler={() => placeNewBlock(isCommentable, isEditable, false, 'informer', false, false, false, false, false, false, index)}
                                        newImageHandler={() => placeNewBlock(isCommentable, isEditable, false, 'image', false, false, false, false, false, <img src={IMGTemplate} alt=' ' />, index)}
                                        deleteButtonHandler={deleteBlock(index)}
                                        key={index} />)}
    </React.Fragment>
  );
}

export default ContentBlock;
  