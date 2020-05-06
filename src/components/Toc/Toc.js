import React, { useContext } from 'react';
import TocItem from './TocItem';
import TocSection from './TocSection';

import { RoleContext } from '../../context/ProjectContext';
import './Toc.css';

function Toc(props) {
  const { programmContent } = props;
  const { role } = useContext(RoleContext);
  
  const list = programmContent.map(item => {
    if(item.sectionName)
      return <TocSection section={item} key={item.name} />;
    else
      return <TocItem status={ item.status } content={item.name} isMine={item.member === role} sectionName='' key={item.name} />;
  });

  return (
    <div className='toc'>
      {list}
    </div>
  );
}

export default Toc;
