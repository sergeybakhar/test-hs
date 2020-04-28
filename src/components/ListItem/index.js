import React from 'react';
import styles from './ListItem.module.scss';

const ListItem = ({ name, renderList, firstItems, lastItems }) => {
  return (
    <li className={`${styles.listItem} ${
      firstItems ? styles.listItem_first : lastItems ? styles.listItem_last : ''
      }`}>
      <p className={styles.listItem__text}>{name}</p>
      {renderList ? renderList() : null}
    </li >
  );
}

export default ListItem;
