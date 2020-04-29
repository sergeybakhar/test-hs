import React, { useState } from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ name, renderList, firstItems, lastItems }) => {
  const [visibilityItem, setVisibilityItem] = useState(true);

  const handleCollapsibleItem = e => {
    e.stopPropagation();
    setVisibilityItem(!visibilityItem);
  }

  return (
    <li
      onClick={handleCollapsibleItem}
      className={`${styles.listItem} ${
        firstItems ? styles.listItem_first
          : lastItems ? styles.listItem_last
            : !visibilityItem ? styles.listItem_visible : ''
        }`}
    >
      <p className={styles.listItem__text}>{name}</p>
      {renderList ? renderList(visibilityItem) : null}
    </li >
  );
}

export default ListItem;
