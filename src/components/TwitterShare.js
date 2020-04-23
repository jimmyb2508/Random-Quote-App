import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TwitterShare = ({ quote, author }) => {
  return (
    <React.Fragment>
      <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="_blank" rel="noopener noreferrer" title="Post this quote on twitter!">
        <span>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </span>
      </a>
    </React.Fragment>
  )
}

export default TwitterShare;