import React from 'react';
import './Content.css';

function Content(props) {
  const {size, children} = props;
  
  return (
    <section className={`content content_size_${size}`}>
      {children}
    </section>
  );
}

export default Content;
