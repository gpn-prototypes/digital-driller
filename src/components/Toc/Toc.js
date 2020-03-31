import React from 'react';
import TocItem from './TocItem';

import './Toc.css';

function Toc(props) {
  const { list } = props;
  const tocList = list.map(item => {
    return <TocItem status={item.status} content={item.name} isMine={item.isMine} key={item.name} />;
  });

  return (
    <div className='toc'>
      {tocList}
    </div>
  );
}

export default Toc;
