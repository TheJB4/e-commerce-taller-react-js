import PropTypes from "prop-types";
import React from "react";
import { EcommerceContext } from "../Context";

const Card = ({ data }) => {
  Card.propTypes = {
    data: PropTypes.node.isRequired,
  };

  let { 
    setCount, 
    count, 
    setOpenModal, 
    setOpenComponentShow, 
    setShoppingCart,
    shoppingCart,
    setOpenShoppingCart
  } =
    React.useContext(EcommerceContext);

  let openModal = () => {
    setOpenModal(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpenComponentShow(data);
  };

  let addToCart = (data) => {
    setCount(count + 1);
    setShoppingCart([...shoppingCart,data]);
    setOpenShoppingCart(true)
  };

  let checkoutButton = (data) => {
    let isInCar = shoppingCart.filter(product => product.id === data.id).length > 0
    if(isInCar){
      return(
        <div
        className="absolute bg-white rounded-full top-0 right-0 flex justify-center items-center font-bold mt-1 mr-1 w-6 h-6"
      >
        ✔
      </div>
      )
    }else{
      return(
        <div
          className="absolute bg-white rounded-full top-0 right-0 flex justify-center items-center font-bold mt-1 mr-1 w-6 h-6 cursor-pointer"
          onClick={() => addToCart(data)}
        >
          +
        </div>
      )
    }
  }

  return (
    <div className="w-56 h-60">
      <figure className="relative bg-white text-lg mb-1">
        <span className="absolute bg-white/70 bottom-0 left-0 mb-3 ml-3 text-xs py-0.5 px-1">
          {data.category.name}
        </span>
        {
          checkoutButton(data)
        }
        <img
          src={data.images[0] || data.images[1] || data.images[2]}
          alt={data.title}
          className="h-full w-full object-cover rounded-md"
          onClick={openModal}
        />
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light cursor-pointer">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
