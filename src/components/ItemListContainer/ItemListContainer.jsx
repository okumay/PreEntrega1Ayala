import { ItemList } from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  return (
    <div className="mainWrapper">
      <div className="main">
        <ItemList {...props} />
      </div>
    </div>
  );
};

export { ItemListContainer };
