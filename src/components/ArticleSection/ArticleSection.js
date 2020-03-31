import React from 'react';
import { Text, Badge } from '@gpn-design/uikit';

import './ArticleSection.css';
import { tocList, team } from '../../mocks/newProgramm';

function ArticleSection(props) {
  const { header, children } = props;
  let badge;
  let articleInfo = tocList.filter(item => item.name === header)[0];
  let isMine = articleInfo.isMine;
  let member = articleInfo.member;
  let status = articleInfo.status;
  let deadline = team.filter(item => item.name === member)[0].deadline;
  
  if (status === 'done')
    badge = <Badge wpSize='m' view='filled' status='success'>готово</Badge>;
  else if (status === 'in progress')
    badge = <Badge wpSize='m' view='filled' status='system'>{'до ' + deadline}</Badge>;

  return (
    <div className='article-section'>
      <div className='content__main'>
        <Text id={header} tag='h2' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{header}</Text>
        <div className='decorator decorator_distribute_left decorator_indent-b_l'>
          {badge}
          <Text size='m' view={isMine ? 'brand' : 'ghost'} className='decorator decorator_indent-l_m'>@{member}</Text>
        </div>
      </div>

      {children}
    </div>
  );
}

export default ArticleSection;
