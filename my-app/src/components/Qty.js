import React from "react";
import classNames from "classnames";

class Qty extends React.Component {
  render() {
    return (
      <div className={classNames({ qty_1: this.props.qty <= 1 }, { qty_2: this.props.qty > 1 })}>
        Цена: {this.props.price} Количество: {this.props.qty}
      </div>
    );
  }
}

export default Qty;
