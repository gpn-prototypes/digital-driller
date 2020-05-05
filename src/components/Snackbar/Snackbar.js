import React, { useState } from 'react';

import { cnTheme } from '@gpn-design/uikit/Theme';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css';

import './Snackbar.css';

function Snackbar(props) {
  const { message, visible = false } = props;
  const [isVisible, setVisible] = useState(visible);

  setTimeout(() => {
    setVisible(false);
  }, 3000);

  return (
    <div
      className={cnTheme({
        color: 'gpnDark'},
        ['snackbar', isVisible ? 'snackbar_visible' : ''])}>
      {message}
    </div>
  );
}

export default Snackbar;
