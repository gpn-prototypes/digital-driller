import React from 'react';
import './Content.css';

function Content(props) {
  const {size, split, children} = props;
  
  return (
    <section className={`content
        ${size ? `content_size_${size}` : ''}
        ${split ? `content_split` : ''}`}>
      {children}
    </section>
  );
}

export default Content;
