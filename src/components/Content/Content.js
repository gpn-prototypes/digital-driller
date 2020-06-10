import React from 'react';
import './Content.css';

function Content(props) {
  const {size, blind, height, padding = true, children} = props;
  
  return (
    <section className={`content${size ? ` content_size_${size}` : ''}${height ? ` content_height_${height}` : ''}${blind ? ` content_split_${blind}` : ''}${padding ? ` content_padding` : ''}`}>
      {children}
    </section>
  );
}

export default Content;
