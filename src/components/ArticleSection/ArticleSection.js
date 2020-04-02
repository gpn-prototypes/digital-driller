import React from 'react';
import { Text, Badge, Button } from '@gpn-design/uikit';

import './ArticleSection.css';

function ArticleSection(props) {
  const { tocList, team, header, children } = props;
  let badge, saveButton = '';
  let articleInfo = tocList.filter(item => item.name === header)[0];
  let isMine = articleInfo.isMine;
  let member = articleInfo.member;
  let status = articleInfo.status;
  let deadline = team.filter(item => item.name === member)[0].deadline;
  
  if (status === 'done')
    badge = <Badge size='m' view='filled' status='success' label='готово' />;
  else if (status === 'in progress')
    badge = <Badge size='m' view='filled' status='system' label={'до ' + deadline} />;

  if(isMine)
    saveButton = <Button size='s' view='primary' as='a' href='#' label='Опубликовать' />;

  return (
    <div className='article-section'>
      <div className='content__main'>
        <Text id={header} tag='h2' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{header}</Text>

        <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_l'>
          <div className='decorator decorator_distribute_left'>
            {badge}
            <Text size='m' view={isMine ? 'brand' : 'ghost'} className='decorator decorator_indent-l_m'>@{member}</Text>
          </div>

          {saveButton}
        </div>
      </div>

      {children}
    </div>
  );
}

export default ArticleSection;
