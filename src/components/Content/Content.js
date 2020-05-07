import React from 'react';
import './Content.css';

function Content(props) {
  const {size, split, height, children} = props;
  
  return (
    <section className={`content
        ${size ? `content_size_${size}` : ''}
        ${height ? `content_height_${height}` : ''}
        ${split ? `content_split` : ''}`}>
      {children}
    </section>
  );
}

export default Content;
