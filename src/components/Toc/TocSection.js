import React, { useState } from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { IconSelect } from '@gpn-design/uikit/IconSelect';
import TocItem from './TocItem';

function TocSection(props) {
  const { section, role } = props;
  const [isAccordionOpen, setAccordionState] = useState(false);
  let list = section.list.map(item => {
    let isMine = item.member === role;
    return <TocItem status={item.status} content={item.name} isMine={isMine} sectionName={section.name} role={role} key={item.name} />;
  });

  const openAccordion = () => {
		if (isAccordionOpen === true) return false;
		else                          return true;
	}

  return (
    <div className={`accordion ${isAccordionOpen ? '' : 'accordion_closed'}`}>
      <div className='accordion__header'>
        <a href={`#${section.name}`} className='toc__section-name decorator decorator_space-l_s'>{section.name}</a>
        <Button size='xs' view='clear' iconOnly={true} iconLeft={IconSelect} className='accordion__button' onClick={() => setAccordionState(openAccordion)} />
      </div>
      <div className='accordion__list'>
        {list}
      </div>
    </div>
  );
}

export default TocSection;
