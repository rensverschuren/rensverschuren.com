import React from 'react';

export default (props) => {
  return (
    <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 15px' }}>
      <div style={{ maxWidth: '530px', padding: '20vh 0 400px' }}>
        {props.children}
      </div>
    </div>
  );
}
