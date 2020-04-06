import React from 'react';

import './Snackbar.css';

function Snackbar(props) {
  const { message, id, className } = props;

  return (
    <div className={`snackbar theme theme_color_gpn-dark ${className}`} id={id}>
      {message}
    </div>
  );
}

export default Snackbar;
