import React, { useState, useContext } from 'react';
import { ProgrammInfoContext } from '../../context/ProgrammInfoContext';

import { Button } from '@gpn-design/uikit/Button';
import { IconComment } from '@gpn-design/uikit/IconComment';
import { IconClose } from '@gpn-design/uikit/IconClose';
import NewComment from './NewComment';
import Conversation from './Conversation';

import { commentList } from '../../mocks/commentList';
import './CommentBlind.css';

function CommentBlind(props) {
  const { id } = props;
  const { showRightBlind, hideAllBlinds } = useContext(ProgrammInfoContext);
  const [isVisible, setVisibility] = useState(false);
  
  let commentInfo = false;
  if(id) commentInfo = commentList.filter(item => item.id === id)[0];

  const closePopup = () => {
    setVisibility(false);
    document.removeEventListener('click', handleDocumentClick);
  }
  const handleDocumentClick = (e) => {  
    if(!isVisible) {
      let popup = document.querySelector(`.CommentWrap_visible .CommentPopup`);
      if(popup)
      if(!popup.contains(e.target)) closePopup();
      setTimeout(() => {
        if(document.querySelectorAll(`.CommentWrap_visible .CommentPopup`).length === 0) hideAllBlinds();;
      }, 20);
    }
  }

  const commentButtonHandler = (e) => {
    if(isVisible) {
      closePopup();
    } else {
      setVisibility(true);
      showRightBlind();
      document.addEventListener('click', handleDocumentClick);
    }
  };

  // если есть коммент — отобразить
  // если есть коммент — отобразить кнопку с числом комментов и не прятать
  // если коммента нет — нарисовать новый

  // при заполнении первого коммента показывать новый вид

  return (
    <div className={`Block__rightButtons CommentWrap ${commentInfo || isVisible ? `CommentWrap_visible` : ``}`}>
      { /* нет комментов */
        !commentInfo && !isVisible ?
        <Button view='clear' size='s' iconSize='s' onlyIcon={true} iconLeft={IconComment} form='round' tabIndex={-1} onClick={(e) => commentButtonHandler(e)} /> : ''
      }
      { /* закрыть новый коммент */
        !commentInfo && isVisible ?
        <React.Fragment>
          <Button view='primary' size='s' iconSize='s' onlyIcon={true} iconLeft={IconClose} form='round' tabIndex={-1} onClick={(e) => closePopup(e)} />
          <NewComment />
        </React.Fragment> : ''
      }
      
      { /* есть комменты */
        commentInfo && !isVisible ?
        <Button view='ghost' size='s' iconSize='s' iconLeft={IconComment} label='1' form='round' tabIndex={-1} onClick={(e) => commentButtonHandler(e)} /> : ''
      }
      { /* закрыть переписку */
        commentInfo && isVisible ?
        <React.Fragment>
          <Button view='primary' size='s' iconSize='s' iconLeft={IconClose} label='1' form='round' tabIndex={-1} onClick={(e) => closePopup(e)} />
          <Conversation info={commentInfo} commentsCount={commentList.length} />
        </React.Fragment> : ''
      }
    </div>
  )
}

export default CommentBlind;
  