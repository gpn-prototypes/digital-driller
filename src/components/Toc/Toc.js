import React, { useContext } from 'react';
import TocItem from './TocItem';
import TocSection from './TocSection';

import { UserContext } from '../../context/ProjectContext';

import programmBlocks from '../../mocks/programmBlocks';
import './Toc.css';

function Toc(props) {
  const { programmInfo } = props;
  const programmTeam = programmInfo.team;
  const { user } = useContext(UserContext);
  
  const list = programmBlocks.map(item => {
    if(item.isSection) {
      let sectionItems = programmBlocks.filter(x => x.section === item.name);
      
      sectionItems = sectionItems.map((x, index) => {
        let thisUser = programmTeam.filter(y => y.role === x.member)[0];
        return <TocItem status={ thisUser.status } content={x.name} isMine={x.member === user.role} sectionName={item.name} key={x.name} />
      });

      return <TocSection section={item.name} key={item.name}>{sectionItems}</TocSection>;
    

    } else if(!item.section) {
      let thisUser = programmTeam.filter(x => x.role === item.member)[0];
      
      return <TocItem status={ thisUser.status } content={item.name} isMine={item.member === user.role} sectionName='' key={item.name} />;
    }
  });

  return (
    <div className='toc'>
      {list}
    </div>
  );
}

export default Toc;
