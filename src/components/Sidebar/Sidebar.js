import React from 'react';
import Filters from '../Filters/Filters';

const Sidebar = props => {
  return (
    <div className={props.className}>
      <Filters />
    </div>
  );
};

export default Sidebar;
