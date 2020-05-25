import React, { useState } from 'react';

import { Text } from '@gpn-design/uikit/Text';
import Field from '../../Field/Field';
import TableRow from '../TableRow/ContentBlockTableRow';
import ContentBlockHeader from '../Type/Header';

function ContentBlockTable(props) {
  const { size, isCommentable, isEditable, addButton, commentButton, deleteButton, commentPopup, newBlockPopup, tableHeader, tableBody, tableFooter, tableName } = props;
  const [rowList, setRowList] = useState([...tableBody]);

  const getNewRow = (value, index) => {
    return <TableRow comment={isCommentable} edit={isEditable} commentButton={commentButton} commentPopup={commentPopup} key={index}>{value}</TableRow>
  }

  return (
    <React.Fragment>
      { tableName !== false ?
        <ContentBlockHeader isCommentable={isCommentable} isEditable={isEditable} addButton={addButton} commentButton={commentButton} deleteButton={deleteButton} commentPopup={commentPopup} newBlockPopup={newBlockPopup} children={tableName} /> : ''
      }
      <div className={`Article__section ${size ? 'Article__section_size_full' : ''} Block decorator decorator_indent-b_l decorator_indent-t_l`}>
        <table className={`table ${isEditable ? 'table_editable' : ''} ${isCommentable ? 'table_commentable' : ''}`}>
          { tableHeader ?
            <thead>
              { tableHeader.map((value) => {
                return <tr>
                  { isEditable ? <th></th> : '' }
                  { value }
                  { isEditable || isCommentable ? <th></th> : '' }
                </tr>
              }) }
            </thead> : ''
          }

          <tbody>
            { rowList.map((value, index) => getNewRow(value, index)) }
          </tbody>
          
          { tableFooter ?
            <tfoot>
              <tr>
                { isEditable ? <td></td> : '' }
                { tableFooter.map((value) => value) }
                { isEditable || isCommentable ? <td></td> : '' }
              </tr>
            </tfoot> : ''
          }
        </table>
      </div>
    </React.Fragment>
  );
}

export default ContentBlockTable;
