import React, { useState } from 'react';

import './ContentBlock.css';
import IMGTemplate from '../../images/Профиль_ствола_скважины.jpg';
import ContentBlockItem from './ContentBlockItem';

function ContentBlock(props) {
  const { isEditable = false, size = false, type = false, tableHeader = false, tableBody = false, tableFooter = false, tableName = false, listItems = false, commentID, adviceID, children } = props;
  const [blockList, setBlockList] = useState([{ isEditable, size, type, tableHeader, tableBody, tableFooter, tableName, listItems, children, commentID }]);
  
  const placeNewBlock = (thisIsEditable = false, thisSize = false, thisType = false, thisTableHeader = false, thisTableBody = false, thisTableFooter = false, thisTableName = false, thisListItems = false, thisChildren, thisCommentID, index) => {
    let newBlock = [...blockList];
    newBlock.splice(index+1, 0, { isEditable: thisIsEditable, size: thisSize, type: thisType, tableHeader: thisTableHeader, tableBody: thisTableBody, tableFooter: thisTableFooter, tableName: thisTableName, listItems: thisListItems, children: thisChildren, commentID: thisCommentID });
    setBlockList(newBlock);
  }

  const deleteBlock = (index) => () => {
    const newList = blockList;
    newList.splice(index, 1);
    setBlockList([...newList]);
  }

  return (
    <React.Fragment>
      {blockList.map((item, index) => <ContentBlockItem
                                        isEditable={item.isEditable}
                                        size={item.size}
                                        type={item.type}
                                        tableHeader={item.tableHeader}
                                        tableBody={item.tableBody}
                                        tableFooter={item.tableFooter}
                                        tableName={item.tableName}
                                        listItems={item.listItems}
                                        commentID={item.commentID}
                                        children={item.children}
                                        newParagraphHandler={() => placeNewBlock(isEditable, false, 'paragraph', false, false, false, false, false, false, [], index)}
                                        newHeaderHandler={() => placeNewBlock(isEditable, false, 'header', false, false, false, false, false, false, [], index)}
                                        newListHandler={() => placeNewBlock(isEditable, false, 'list', false, false, false, false, [''], false, [], index)}
                                        newInformerHandler={() => placeNewBlock(isEditable, false, 'informer', false, false, false, false, false, false, [], index)}
                                        newImageHandler={() => placeNewBlock(isEditable, false, 'image', false, false, false, false, false, <img src={IMGTemplate} alt=' ' />, [], index)}
                                        deleteButtonHandler={deleteBlock(index)}
                                        key={index} />)}
    </React.Fragment>
  );
}

export default ContentBlock;
  