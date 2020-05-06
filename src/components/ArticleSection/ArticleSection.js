import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RoleContext } from '../../context/ProjectContext';

import { Text } from '@gpn-design/uikit/Text';
import { Badge } from '@gpn-design/uikit/Badge';

import { team } from '../../mocks/team';

import './ArticleSection.css';

function ArticleSection(props) {
  const { header, status, owner, section, deadline, children } = props;
  const { role } = useContext(RoleContext);
  const history = useHistory();
  // const [isSectionPublished, setSectionStatus] = useState(false);
  const user = team.filter(member => member.role === owner)[0];
  let badge, sectionID;
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
  
  if (status === 'done')
    badge = { status: 'success', label: 'готово' }; 
  else if (status === 'warning')
    badge = { status: 'warning', label: `есть замечания` };
  else
    badge = { status: 'system', label: `до ${deadline}` };

  // if(owner === role)
  //   saveButton = <Button size='s' view='primary' label='Опубликовать' onClick={showShackbar} />;

  return (
    <React.Fragment>
      <div className='Article__section decorator decorator_space-t_3xl' id={sectionID}>
        <Text tag='h3' size='2xl' view='primary' lineHeight='s' className='decorator decorator_indent-b_s'>{header}</Text>

        <div className='decorator decorator_distribute_between decorator_vertical-align_center decorator_indent-b_l'>
          <div className='decorator decorator_distribute_left'>
            <Badge size='m' view='stroked' status={badge.status} label={badge.label} />
            <Text size='m' view={owner === role ? 'brand' : 'ghost'} weight={owner === role ? 'bold' : 'regular'} className='decorator decorator_indent-l_m'
              onClick={() => { history.push(`/digital-driller/profile`) }}>@{user.name}</Text>
          </div>
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
