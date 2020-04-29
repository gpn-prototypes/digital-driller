import React from 'react';

import { cnTheme } from '@gpn-design/uikit/Theme';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css';

import './Snackbar.css';

function Snackbar(props) {
  const { message, visible } = props;

  return (
    <div
      className={cnTheme({
        color: 'gpnDark'},
        ['snackbar', visible ? 'snackbar_visible' : ''])}>
      {message}
    </div>
  );
}

export default Snackbar;
