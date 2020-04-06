import React from 'react';
import TocItem from './TocItem';
import TocSection from './TocSection';

import { tocList } from '../../mocks/newProgramm';
import './Toc.css';

function Toc(props) {
  const { role } = props;
  const list = tocList.map(item => {
    if(item.sectionname)
      return <TocSection section={item} role={role} key={item.name} />;
    else
      return <TocItem status={item.status} content={item.name} isMine={item.member === role} sectionName='' key={item.name} />;
  });

  return (
    <div className='toc'>
      {list}
    </div>
  );
}

export default Toc;
