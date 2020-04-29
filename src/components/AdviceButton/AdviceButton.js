import React from 'react';
import { Button } from '@gpn-design/uikit/Button';
import { IconAlert } from '@gpn-design/uikit/IconAlert';

function AdviceButton(props) {
  const { adviceID } = props;
  
  const showAdvicePopup = (id) => {
    let popup = document.querySelector(`#advicepopup${id}`);
    let nextPopupButton = popup.querySelector('.advicepopup__next');
    let prevPopupButton = popup.querySelector('.advicepopup__prev');
    let button = document.querySelector(`.block__avicebutton[href="#advicepopup${id}"]`);

    const handleDocumentClick = (e) => {
      if(!popup.contains(e.target) && !button.contains(e.target)) {
        closePopup();

      } else if(nextPopupButton.contains(e.target)) {
        closePopup();
        showAdvicePopup(id+1);

      } else if(prevPopupButton.contains(e.target)) {
        closePopup();
        showAdvicePopup(id-1);
      }
    }
    const closePopup = () => {
      popup.classList.remove('advicepopup_visible');
      document.removeEventListener('click', handleDocumentClick, false);
    }
    
    if(popup.classList.contains('advicepopup_visible')) {
      closePopup();
    } else {
      popup.classList.add('advicepopup_visible');
      document.addEventListener('click', handleDocumentClick);
    }
  }

  return (
    <Button as='a' href={`#advicepopup${adviceID}`} view='ghost' size='s' iconSize='s' iconOnly={true} iconLeft={IconAlert} className='block__avicebutton' onClick={() => { showAdvicePopup(adviceID) }} />
  );
}

export default AdviceButton;
  