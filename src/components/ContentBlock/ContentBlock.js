import React from 'react';
import { Button, Text, IconAdd, IconComment, IconAlert, IconTable, IconLink, IconPhoto, IconAlignLeft } from '@gpn-design/uikit';

import './ContentBlock.css';

const setEditableButton = (button) => {
  let block = button.parentNode;
  let popup = block.querySelector('.block__popup');
  let addTextBlock = popup.querySelector('.block__popup-item_textblock');
  let addAlertBlock = popup.querySelector('.block__popup-item_alertblock');
  let addTableBlock = popup.querySelector('.block__popup-item_tableblock');
  let addImportBlock = popup.querySelector('.block__popup-item_importblock');
  let addImageBlock = popup.querySelector('.block__popup-item_imageblock');
  
  button.addEventListener('click', () => {
    block.classList.add('block_show-popup');
  });

  addTextBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateTextBlock').cloneNode(true);
    template.classList.remove('templateTextBlock');
    setEditableButton(template.querySelector('.block__left-button'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
  addAlertBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateAlertBlock').cloneNode(true);
    template.classList.remove('templateAlertBlock');
    setEditableButton(template.querySelector('.block__left-button'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
  addImageBlock.addEventListener('click', () => {
    let template = document.querySelector('.templateImageBlock').cloneNode(true);
    template.classList.remove('templateImageBlock');
    setEditableButton(template.querySelector('.block__left-button'));
    
    block.after(template);
    block.classList.remove('block_show-popup');
  });
};
const editableArticle = () => {
  document.querySelectorAll('.block__left-button').forEach(button => {
    setEditableButton(button);
  });
}
setTimeout(() => {
    editableArticle();
}, 500);

function ContentBlock(props) {
  const { isEditable, size, className, children } = props;
  let sizeClassName = size === 'full' ? ' content__main_size_full ' : '';
  
  let addNewBlockButton = <div className='block__left-button'><Button view='ghost' size='s' iconOnly={true} iconLeft={IconAdd} /></div>;
  let popup = <div className='block__popup'>
                <div className='block__popup-item block__popup-item_textblock pt-icon-plus pt-icon-plus_vertical-align_center'>
                  <IconAlignLeft size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
                  <Text size='s' view='primary'>Текстовый блок</Text>
                </div>
                <div className='block__popup-item block__popup-item_alertblock pt-icon-plus pt-icon-plus_vertical-align_center'>
                  <IconAlert size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
                  <Text size='s' view='primary'>Примечание</Text>
                </div>
                <div className='block__popup-item block__popup-item_tableblock pt-icon-plus pt-icon-plus_vertical-align_center'>
                  <IconTable size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
                  <Text size='s' view='primary'>Таблица</Text>
                </div>
                <div className='block__popup-item block__popup-item_importblock pt-icon-plus pt-icon-plus_vertical-align_center'>
                  <IconLink size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
                  <Text size='s' view='primary'>Графики, модели и диаграммы</Text>
                </div>
                <div className='block__popup-item block__popup-item_imageblock pt-icon-plus pt-icon-plus_vertical-align_center'>
                  <IconPhoto size='s' view='ghost' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' />
                  <Text size='s' view='primary'>Изображения</Text>
                </div>
              </div>;

  return (
    <div className={'content__main block block_editable decorator decorator_indent-b_l ' + sizeClassName + className}>
      {isEditable ? addNewBlockButton : ''}
      <div className='block__right-button'>
        <Button view='ghost' size='s' iconOnly={true} iconLeft={IconComment} />
      </div>

      {isEditable ? popup : ''}
      
      {children}
    </div>
  );
}

export default ContentBlock;
  