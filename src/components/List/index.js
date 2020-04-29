import React from 'react';
import ListItem from '../ListItem';
import { mockData } from '../../constants/constants';
import styles from './List.module.scss';

const List = () => {
  const { data } = mockData;
  const renderList = (data, status = true) => {

    return (
      <ul
        className={styles.list}
        style={{ display: status ? 'block' : 'none' }}
      >
        {data.map((item) => {
          if (item.children !== undefined && item.children.length > 0) {
            return (
              <ListItem
                key={item.name}
                name={item.name}
                renderList={(status) => renderList(item.children, status)}
                firstItems={data.length === mockData.data.length}
                lastItems={
                  item.children === undefined || item.children.length === 0
                }
              />
            );
          }
          return (
            <ListItem
              key={item.name}
              name={item.name}
              dataLength={data.length}
              lastItems={
                item.children === undefined || item.children.length === 0
              }
            />
          );
        })}
      </ul>
    );
  };

  return <section className={styles.listSection}>{renderList(data)}</section>;
};

export default List;
