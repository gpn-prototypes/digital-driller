import React from 'react';
import { Text, IconAlert, IconTable, IconLink, IconPhoto, IconAlignLeft } from '@gpn-design/uikit';

import './NewBlockPopup.css';

const setEditableButton = (button) => {
  let block = button.parentNode.parentNode;
  let popup = block.querySelector('.newblockpopup');
  let addTextBlock = popup.querySelector('.newblockpopup-item_textblock');
  let addAlertBlock = popup.querySelector('.newblockpopup-item_alertblock');
  let addTableBlock = popup.querySelector('.newblockpopup-item_tableblock');
  let addImportBlock = popup.querySelector('.newblockpopup-item_importblock');
  let addImageBlock = popup.querySelector('.newblockpopup-item_imageblock');
  
  button.addEventListener('click', () => {
    block.classList.toggle('block_show-popup');
  });

  addTextBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateTextBlock').cloneNode(true);
    template.classList.remove('templateTextBlock');
    setEditableButton(template.querySelector('.block__addnewblockbutton'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
  addAlertBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateAlertBlock').cloneNode(true);
    template.classList.remove('templateAlertBlock');
    setEditableButton(template.querySelector('.block__addnewblockbutton'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
  addImageBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateImageBlock').cloneNode(true);
    template.classList.remove('templateImageBlock');
    setEditableButton(template.querySelector('.block__addnewblockbutton'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
};
const editableArticle = () => {
  document.querySelectorAll('.block__addnewblockbutton').forEach(button => {
    setEditableButton(button);
  });
}
setTimeout(() => {
    editableArticle();
}, 500);

function NewBlockPopup(props) {
  const { className = '' } = props;

  return (
    <div className='newblockpopup'>
      <div className='newblockpopup-item newblockpopup-item_textblock pt-icon-plus pt-icon-plus_vertical-align_center'>
        <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        <Text size='s' view='primary'>Текстовый блок</Text>
      </div>
      <div className='newblockpopup-item newblockpopup-item_alertblock pt-icon-plus pt-icon-plus_vertical-align_center'>
        <IconAlert size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        <Text size='s' view='primary'>Примечание</Text>
      </div>
      <div className='newblockpopup-item newblockpopup-item_tableblock pt-icon-plus pt-icon-plus_vertical-align_center'>
        <IconTable size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        <Text size='s' view='primary'>Таблица</Text>
      </div>
      <div className='newblockpopup-item newblockpopup-item_importblock pt-icon-plus pt-icon-plus_vertical-align_center'>
        <IconLink size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        <Text size='s' view='primary'>Графики, модели и диаграммы</Text>
      </div>
      <div className='newblockpopup-item newblockpopup-item_imageblock pt-icon-plus pt-icon-plus_vertical-align_center'>
        <IconPhoto size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
        <Text size='s' view='primary'>Изображения</Text>
      </div>
    </div>
  );
}

export default NewBlockPopup;
  