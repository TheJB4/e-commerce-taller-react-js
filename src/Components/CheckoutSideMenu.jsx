import React from "react"
import { Link } from "react-router-dom"
import { EcommerceContext } from "../Context"
import CardMenu from "./CardMenu"

import { totalPrice } from "../utils/total"

const CheckoutSideMenu = () => {
    let {openShoppingCart, setOpenShoppingCart,shoppingCart,deleteProduct,checkout} = React.useContext(EcommerceContext)

  return (
    <aside 
        className={ openShoppingCart ? 'flex flex-col border-2 border-black w-60 h-screen absolute right-0 top-14 bg-white rounded-md' : 'hidden'}>
          <h2 className="text-lg p-2">My oder:</h2>
        <span 
                onClick={()=>setOpenShoppingCart(false)}
                className="absolute right-2 top-0 cursor-pointer font-bold text-lg m-0"
        >X</span>
          <div className="overflow-y-scroll flex-1">
            {
              shoppingCart.map(product =>(
                <CardMenu 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  setOpenShoppingCart={setOpenShoppingCart}
                  deleteProduct={deleteProduct}
                />
              ))
            }
          </div>
          <div className="flex justify-between p-3">
            <h3 className="text-lg font-semibold">Total:</h3>
            <span className="text-lg font-bold">${totalPrice(shoppingCart)}</span>
          </div>
          <div className="w-full flex justify-center mb-2">
            <Link to={'/myorders/last'}>
              <button 
                className="bg-black text-white w-44 h-11 rounded-md"
                onClick={()=>checkout(shoppingCart)}
              >Checkout</button>
            </Link>
          </div>
    </aside>
  )
}

export default CheckoutSideMenu