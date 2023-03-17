import React from 'react';

import './error-indicator.css';
import humanIcon from './human-in-space.png';

const ErrorIndicator = () => {
  return(
    <div className="error-indicator">
      <img src={humanIcon} alt="error human icon"/>
      <span className="lethal-error">Error</span>
      <span>
        what's going on!
      </span>
      <span>
        ( we fixing it )
      </span>
    </div>
  );
};

export default ErrorIndicator;