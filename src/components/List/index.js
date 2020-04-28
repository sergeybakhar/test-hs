import React from "react";
import ListItem from "../ListItem";
import { mockData } from "../../constants/constants";

const List = () => {
  const { data } = mockData;

  const renderList = (data) => {
    return (
      <ul>
        {data.map((item) => {
          if (item.children !== undefined && item.children.length > 0) {
            return (
              <ListItem
                key={item.name}
                name={item.name}
                renderList={() => renderList(item.children)}
              />
            );
          }
          return <ListItem key={item.name} name={item.name} />
        })}
      </ul>
    );
  };

  return <div>{renderList(data)}</div>;
};

export default List;
