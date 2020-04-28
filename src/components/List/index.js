import React from 'react';
import { mockData } from '../../constants/constants'

const List = () => {
  const { data } = mockData;

  const renderList = data => {
    return (
      <ul>
        {
          data.map(item => {
            if (item.children !== undefined && item.children.length > 0) {
              return <li key={item.name}>
                {item.name} {renderList(item.children)}
              </li>
            }
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    )
  };

  return (
    <div>
      {renderList(data)}
    </div>
  );
}

export default List;
