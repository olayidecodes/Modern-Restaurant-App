import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <div className="p__cormorant" style={{color: '#DCCA87'}}>{title}</div>
      </div>

      <div className="app__menuitem-dash"></div>

      <div className="app__menuitem-price">
        <div className="p__cormorant" >{price}</div>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <div className="p__opensans" style={{color: '#AAA'}}>{tags}</div>
    </div>

  </div>
);

export default MenuItem;
