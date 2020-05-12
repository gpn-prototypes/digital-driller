import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';

import TheHeader from '../components/TheHeader/TheHeader';
import ArticleSection from '../components/ArticleSection/ArticleSection';
import Snackbar from '../components/Snackbar/Snackbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Modal from '../components/Modal/Modal';

import programmList from '../mocks/programmList';
import programmBlocks from '../mocks/programmBlocks';

import Content from '../components/Content/Content';

function ProgrammPage() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [ modal, setModal ] = useState('');
  const programmInfo = programmList.filter(item => item.id == id)[0];
  
  let blockList = programmBlocks.map((template, index) => {
    if (template.isSection) {
      return <div className='content__main decorator decorator_indent-t_4xl' key={`${index}:${template.name}`}>
                <Text tag='h2' size='3xl' view='primary' lineHeight='s' id={ template.name }>{ template.name }</Text>
             </div>
    } else {
      let owner = programmInfo.team.filter(x => x.role === template.member)[0];
    
      if(programmInfo.stage === 'Заполнение' && user.role === template.member) {
        if(owner.status === 'Заполняется')
          return <ArticleSection isMine={owner.role === user.role} owner={owner.name} status={owner.status} header={template.name} deadline={programmInfo.deadline} section={template.section} key={`${index}:${template.name}`}>{ template.emptyContentEditable }</ArticleSection>
        else
          return <ArticleSection isMine={owner.role === user.role} owner={owner.name} status={owner.status} header={template.name} deadline={programmInfo.deadline} section={template.section} key={`${index}:${template.name}`}>{ template.contentEditable }</ArticleSection>
      } else if(programmInfo.stage === 'Заполнение' && user.role != template.member) {
        if(owner.status === 'Заполняется')
          return <ArticleSection isMine={owner.role === user.role} owner={owner.name} status={owner.status} header={template.name} deadline={programmInfo.deadline} section={template.section} key={`${index}:${template.name}`}>{ template.emptyContentReadable }</ArticleSection>
        else
          return <ArticleSection isMine={owner.role === user.role} owner={owner.name} status={owner.status} header={template.name} deadline={programmInfo.deadline} section={template.section} key={`${index}:${template.name}`}>{ template.contentReadable }</ArticleSection>
      } else {
        return <ArticleSection isMine={owner.role === user.role} owner={owner.name} status={owner.status} header={template.name} section={template.section} key={`${index}:${template.name}`}>{ template.contentReadable }</ArticleSection>
      }
    }
  });

  return (
    <React.Fragment>
      <TheHeader isMinified={true} programmName={programmInfo.field + ' > ' + programmInfo.bush + ' > ' + programmInfo.well} role='Геолог' />
      
      <Content split={true}>
        <Sidebar programmInfo={ programmInfo } teamOnClick={ () => setModal('team') } commentOnClick={ () => setModal('comment') } lessonOnClick={ () => setModal('lesson') } approveOnClick={ () => setModal('approve') } />

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

      { modal === 'team' ? <Modal content='team' programmInfo={programmInfo} onClose={ () => setModal('') } onParanjaAction={ (e) => { if(e.target.classList.contains('Paranja') || e.key == 'Escape') setModal('') } } /> : '' }
      {/* { modal === 'comment' ? <Modal content='comment' programmInfo={programmInfo} onClose={ () => setModal('') } /> : '' } */}
      {/* { modal === 'lesson' ? <Modal content='lesson' programmInfo={programmInfo} onClose={ () => setModal('') } /> : '' } */}
      {/* { modal === 'approve' ? <Modal content='approve' programmInfo={programmInfo} onClose={ () => setModal('') } /> : '' } */}
    </React.Fragment>
  );
}

export default ProgrammPage;