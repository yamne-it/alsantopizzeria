import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = (props) => {
  const [sections, setSections] = useState([
    {
      title: 'starters',
      imageUrl: '../../../public/startersDirectory.png',
      id: 1,
    },
    {
      title: 'salads',
      imageUrl: '../../../public/saladsDirectory.jpg',
      id: 3,
    },
    {
      title: 'desserts',
      imageUrl: '../../../public/dessertsDirectory.jpg',
      id: 3,
    },
    {
      title: 'pizza',
      imageUrl: '../../../public/pizzaDirectory.jpg',
      size: 'large',
      id: 4,
    },
    {
      title: 'mains',
      imageUrl: '../../../public/pastaDirectory.jpg',
      size: 'large',
      id: 5,
    },
  ]);

  const directoryComponent = (
    <div className='directory-menu'>
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );

  return directoryComponent;
};

export default Directory;
