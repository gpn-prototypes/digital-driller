import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoleContext } from '../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';

import TheHeader from '../components/TheHeader/TheHeader';
import ArticleSection from '../components/ArticleSection/ArticleSection';
import Snackbar from '../components/Snackbar/Snackbar';
import Sidebar from '../components/Sidebar/Sidebar';

import programmList from '../mocks/programmList';
import programmBlocks from '../mocks/programmBlocks';

import Content from '../components/Content/Content';

function ProgrammPage() {
  const { id } = useParams();
  const { role } = useContext(RoleContext);
  const programmInfo = programmList.filter(item => item.id == id)[0];
  let blockList = [];

  const getArticleSection = (block) => {
    if (block.sectionName) {
      return <div className='content__main decorator decorator_indent-t_4xl' key={block.name}>
                <Text tag='h2' size='3xl' view='primary' lineHeight='s' id={ block.name }>{ block.name }</Text>
             </div>
    } else if (block.section) {
      let blockContent = programmBlocks.find(template => template.name == block.name && template.section == block.section);

      if(role === block.member)
        return <ArticleSection owner={block.member} status={block.status} header={ block.name } deadline={programmInfo.deadline} section={ block.section } key={block.name}>{ blockContent.contentEditable }</ArticleSection>
      else
        return <ArticleSection owner={block.member} status={block.status} header={ block.name } deadline={programmInfo.deadline} section={ block.section } key={block.name}>{ blockContent.contentReadable }</ArticleSection>
    } else {
      let blockContent = programmBlocks.find(template => template.name == block.name);

      if(role === block.member)
        return <ArticleSection owner={block.member} status={block.status} header={ block.name } deadline={programmInfo.deadline} key={block.name}>{ blockContent.contentEditable }</ArticleSection>
      else
        return <ArticleSection owner={block.member} status={block.status} header={ block.name } deadline={programmInfo.deadline} key={block.name}>{ blockContent.contentReadable }</ArticleSection>
    }
  }
  programmInfo.content.map(item => {
    if (item.sectionName)
      return blockList.push(item.list.map(x => getArticleSection(x)));
    else
      return blockList.push(getArticleSection(item));
  });

  return (
    <React.Fragment>
      <TheHeader isMinified={true} programmName={programmInfo.field + ' > ' + programmInfo.bush + ' > ' + programmInfo.well} role='Геолог' />
      
      <Content split={true}>
        <Sidebar programmInfo={ programmInfo } />

        <div className='Article'>
          <div className='Article__section'>
            <Text tag='h1' size='3xl' weight='bold' view='primary' lineHeight='xs' className='decorator decorator_indent-b_xs'>{ programmInfo.name }</Text>
            {programmInfo.field} > {programmInfo.bush} > {programmInfo.well}
          </div>

          { blockList }
        </div>
      </Content>

      <Snackbar message='Раздел опубликован' />
      <Snackbar message='Программа сохранена' />
    </React.Fragment>
  );
}

export default ProgrammPage;