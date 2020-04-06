import React, { useState } from 'react';
import { Text, Badge, Button } from '@gpn-design/uikit';

import { tocList, team } from '../../mocks/newProgramm';

import './ArticleSection.css';

function ArticleSection(props) {
  const { header, section, role, children } = props;
  const [isSectionPublished, setSectionStatus] = useState(false);
  let badge, sectionID, saveButton = '';
  let sectionInfo;

  const showShackbar = () => {
    let snackbar = document.querySelector('.snackbar#savedSectionSnackbar');
    snackbar.classList.add('snackbar_visible');

    setTimeout(() => {
      snackbar.classList.remove('snackbar_visible');
    }, 6000);

    setSectionStatus(changeSectionStatus)
  };

  const changeSectionStatus = () => {
		if (isSectionPublished === true) return false;
		                            else return true;
	}

  if(section) {
    let bigSection = tocList.filter(item => item.name === section)[0].list;
    sectionInfo = bigSection.filter(item => item.name === header)[0];
    sectionID = section + ': ' + header;
  } else {
    sectionInfo = tocList.filter(item => item.name === header)[0];
    sectionID = header;
  }

  let user = team.filter(member => member.role === sectionInfo.member)[0];
  
  if (sectionInfo.status === 'done' && role === 'geologist')
    badge = { status: 'success', label: 'готово' }; 
  else if (sectionInfo.status === 'alert' && role === 'geologist')
    badge = { status: 'warning', label: `до ${user.deadline}` };
  else
    badge = { status: 'system', label: `до ${user.deadline}` };

  if(sectionInfo.member === role)
    saveButton = <Button size='s' view='primary' as='a' href='#' label='Опубликовать' onClick={showShackbar} />;

  return (
    <div className='article-section'>
      <div className='content__main'>
        <Text id={sectionID} tag='h3' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{header}</Text>

        <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_l'>
          <div className='decorator decorator_distribute_left'>
            <Badge size='m' view='filled' status={isSectionPublished ? 'success' : badge.status} label={isSectionPublished ? 'готово' : badge.label} />
            <Text size='m' view={sectionInfo.member === role ? 'brand' : 'ghost'} weight={sectionInfo.member === role ? 'bold' : 'regular'} className='decorator decorator_indent-l_m'>@{user.name}</Text>
          </div>

          {!isSectionPublished ? saveButton : ''}
        </div>
      </div>

      {children}
    </div>
  );
}

export default ArticleSection;
