import React from 'react';
import styles from './container.scss';

export default (props) => {
  return (
    <div className="container">
      <div className="container__inner">
        {props.children}
      </div>
    </div>
  );
}
