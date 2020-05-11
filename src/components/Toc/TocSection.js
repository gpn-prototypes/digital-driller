import React, { useState, Children } from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { IconSelect } from '@gpn-design/uikit/IconSelect';

function TocSection(props) {
  const { section, children } = props;
  const [isAccordionOpen, setAccordionState] = useState(false);

  const openAccordion = () => {
		if (isAccordionOpen === true) return false;
		else                          return true;
	}

  return (
    <div className={`accordion ${isAccordionOpen ? '' : 'accordion_closed'}`}>
      <div className='accordion__header toc__section-name'>
        <a href={`#${section}`} className='decorator decorator_space-l_s'>{section}</a>
        <Button size='xs' view='clear' onlyIcon={true} iconLeft={IconSelect} className='accordion__button' onClick={() => setAccordionState(openAccordion)} />
      </div>
      <div className='accordion__list'>
        {children}
      </div>
    </div>
  );
}

export default TocSection;
