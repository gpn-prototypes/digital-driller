import React, { useState } from 'react';


import ContentBlockHeader from '../Type/Header';
import ContentBlockTableRow from './TableRow';

function ContentBlockTable(props) {
  const { size, isEditable, addButton, deleteButton, newBlockPopup, tableHeader, tableBody, tableFooter, tableName } = props;
  const [rowList, setRowList] = useState([...tableBody]);

  const getNewRow = (value, index) => {
    return <ContentBlockTableRow edit={isEditable} key={index}>{value}</ContentBlockTableRow>
  }

  return (
    <React.Fragment>
      { tableName !== false ?
        <ContentBlockHeader isEditable={isEditable} addButton={addButton} deleteButton={deleteButton} newBlockPopup={newBlockPopup} children={tableName} /> : ''
      }
      <div className={`Article__section ${size ? 'Article__section_size_full' : ''} Block decorator decorator_indent-b_l decorator_indent-t_l`}>
        <table className={`table ${isEditable ? 'table_editable' : ''} table_commentable`}>
          { tableHeader ?
            <thead>
              { tableHeader.map((value) => {
                return <tr>
                  { isEditable ? <th></th> : '' }
                  { value }
                  <th></th>
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
                <td></td>
              </tr>
            </tfoot> : ''
          }
        </table>
      </div>
    </React.Fragment>
  );
}

export default ContentBlockTable;
