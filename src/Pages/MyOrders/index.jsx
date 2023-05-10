// import React from 'react'
import Layout from "../../Components/Layout"
import React from "react"
import { EcommerceContext } from "../../Context"
import { Link } from "react-router-dom"


const MyOrders = () => {
  let {myorder} = React.useContext(EcommerceContext)

  console.log(myorder)
  return (
    <Layout>
        <h1>My orders: </h1>
          <div className="overflow-y-scroll flex-1 w-1/2">
            {
              myorder?.map(product =>(
                <Link key={product.id} to={`/myorders/${product.id}`}>
                  <div className="w-full flex justify-center text-center items-center mt-3">
                    <div className="w-80 h-20 flex justify-between items-center border-solid border-2 border-black/50 px-3 rounded-md">
                      <div>
                        <p className="font-semibold">{product.day}</p>
                        <p>{product.products.length} articles</p>
                      </div>
                      <p className="text-xl font-semibold">${product.totalPrice}</p>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
    </Layout> 
  )
}

export default MyOrders