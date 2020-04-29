import React from 'react';
import useVisibilityItem from '../../hooks/useVisibilityItem'
import styles from './ListItem.module.scss';

const ListItem = ({ name, renderList, firstItems, lastItems }) => {
  const [
    visibilityItem,
    handleCollapsibleItem
  ] = useVisibilityItem(true);

  return (
    <li
      className={`${styles.listItem} ${
        firstItems ? styles.listItem_first
          : lastItems ? styles.listItem_last
            : !visibilityItem ? styles.listItem_visible : ''
        }`}
    >
      <p
        onClick={handleCollapsibleItem}
        className={`${styles.listItem__text} ${
          lastItems ? styles.listItem__text_last
            : !visibilityItem ? styles.listItem__text_cursor : ''
          }`}
      >{name}</p>
      {renderList ? renderList(visibilityItem) : null}
    </li >
  );
}

export default ListItem;
