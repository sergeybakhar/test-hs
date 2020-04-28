import React from 'react';

const ListItem = ({ name, renderList }) => {
  return (
    <li>{name}{renderList ? renderList() : null}</li>
  );
}

export default ListItem;
