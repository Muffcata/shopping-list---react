import { Component } from 'react';
import style from './ShoppingItem.module.css';

export class ShoppingItem extends Component {
  deleteThisItem = () => {
    const { item, deleteItems } = this.props;
    const { id } = item;
    deleteItems(id);
  };

  render() {
    const { item } = this.props;

    return (
      <>
        <div className={style.list}>
          {item.name}

          <button
            className={style.button}
            type="button"
            onClick={this.deleteThisItem}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
export default ShoppingItem;
