import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';
import { Switch } from '@gpn-design/uikit/Switch';

import { team } from '../../mocks/team';

import './ArticleSection.css';
import { Button } from '@gpn-design/uikit/Button';
import { IconCheck } from '@gpn-design/uikit/IconCheck';

function ArticleSection(props) {
  const { isMine, owner, status, header, section, deadline, children } = props;
  // const { user } = useContext(UserContext);
  const [blockStatus, setBlockStatus] = useState(status);
  // const history = useHistory();
  // const [isSectionPublished, setSectionStatus] = useState(false);
  // const user = team.filter(member => member.role === owner)[0];
  let badge, sectionID;
  let getBlockStatus = () => {
    if(blockStatus === 'Готово') {
      return <Badge size='m' view='stroked' status='success' label={blockStatus} />
    } else if(blockStatus === 'Заполняется') {
      return <Badge size='m' view='stroked' status='system' label={blockStatus} />
    } else if(blockStatus === 'Непримененный совет') {
      return <Badge size='m' view='stroked' status='warning' label={blockStatus} />
    } else if(blockStatus === 'Согласован') {
      return <Badge size='m' view='stroked' status='success' label={blockStatus} />
    } else if(blockStatus === 'В ожидании') {
      return <Badge size='m' view='stroked' status='system' label={blockStatus} />
    } else if(blockStatus === 'Согласуется') {
      return <Badge size='m' view='stroked' status='system' label={blockStatus} />
    }
  }
  let getBlockControls = () => {
    if(blockStatus === 'Заполняется' && isMine) {
      return <Button size='s' view='ghost' label='Блок закончен — опубликовать' /> 
    } else if(blockStatus === 'Готово' && isMine) {
      return <Button size='s' view='ghost' label='Блок закончен — опубликовать' disabled={true} />
    } else if(blockStatus === 'Согласуется' && !isMine) {
      return <Switch size='m' label='Блок проверен' />
    } else if(blockStatus === 'Непримененный совет' && isMine) {
      return <Button size='s' view='ghost' label='Блок закончен — опубликовать' />
    }
  }
  // let sectionInfo;
  // let tocList = programmList.filter(item => item.id == programmID)[0].content;
  // let list = [];

  // const showShackbar = () => {
  //   let snackbar = document.querySelector('.snackbar#savedSectionSnackbar');
  //   snackbar.classList.add('snackbar_visible');

  //   setTimeout(() => {
  //     snackbar.classList.remove('snackbar_visible');
  //   }, 6000);

  //   setSectionStatus(changeSectionStatus)
  // };

  // const changeSectionStatus = () => {
	// 	if (isSectionPublished === true) return false;
	// 	                            else return true;
	// }

  if(section) sectionID = section + ': ' + header;
  else        sectionID = header;
  
  // if (status === 'Готово') {
  //   blockStatus = <div className='pt-icon-plus pt-icon-plus_vertical-align_center'><IconCheck size='s' view='success' className='pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs' /><Text size='s' view='success'>Блок опубликован</Text></div>;
  //   badge = { status: 'success', label: 'готово' }; 
  // } else if (status === 'warning') {
  //   badge = { status: 'warning', label: `есть замечания` };
  // } else {
  //   badge = { status: 'system', label: `до ${deadline}` };
  // }

  // if(owner === role)
  //   saveButton = <Button size='s' view='primary' label='Опубликовать' onClick={showShackbar} />;

  return (
    <React.Fragment>
      <div className='Article__section decorator decorator_indent-t_5xl' id={sectionID}>
        <Text tag='h3' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{header}</Text>

        <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_l'>
          <div className='decorator decorator_distribute_left'>
            { getBlockStatus() }
            <Text size='m' view={isMine ? 'brand' : 'ghost'} weight={isMine ? 'bold' : 'regular'} className='decorator decorator_indent-l_m'
              onClick={() => { }}>@{owner}</Text>
          </div>
          { getBlockControls() }
        </div>
      </div>

      {children}
    </React.Fragment>
    // <div className='article-section'>
    //   <div className='content__main'>
    //     <Text id={sectionID} tag='h3' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{name}</Text>

    //     <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_l'>
    //       <div className='decorator decorator_distribute_left'>
    //         <Badge size='m' view='filled' status={isSectionPublished ? 'success' : badge.status} label={isSectionPublished ? 'готово' : badge.label} />
    //         <Text size='m' view={owner === role ? 'brand' : 'ghost'} weight={owner === role ? 'bold' : 'regular'} className='decorator decorator_indent-l_m'
    //           onClick={() => { history.push(`/digital-driller/${role}/profile`) }}>@{user.name}</Text>
    //       </div>

    //       {!isSectionPublished ? saveButton : ''}
    //     </div>
    //   </div>

    //   {children}
    // </div>
  );
}

export default ArticleSection;
