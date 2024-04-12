import React, { useState } from "react";

const Cart = ({ cartData }) => {
  const [data, setData] = useState(cartData || []);

  const handleRemoveItem = async (itemId) => {
    try {
      await removeItem(itemId);

      const updatedCart = data.filter((item) => item.id !== itemId);
      setData(updatedCart);
    } catch (error) {
      console.error("Erro ao remover item do carrinho:", error);
    }
  };

  const Separator = () => {
    return <div className="separator"></div>;
  };

  return (
    <div className="StorePage">
      <Separator />
      <Separator />
      <div className="libraryitems">
        <div className="GamesArea">
          {data.map((e) => (
            <div key={e.id}>
              <h4>{e.name}</h4>
              <img src={e.background_image} alt={e.name} />
              <button onClick={() => handleRemoveItem(e.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
