import React from 'react'
import Layout from "../../Components/Layout"
import { EcommerceContext } from "../../Context"
import CardMenu from "../../Components/CardMenu"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"

const MyOrder = () => {
  let {myorder} = React.useContext(EcommerceContext)
  let lastOrder = myorder?.slice(-1)[0]
  return (
    <Layout>
          <h1>My order:</h1>
          <Link to='/myorders'>
            <ChevronLeftIcon className="h-6 w-6 text-black-500"/>
          </Link> 
          <div className="overflow-y-scroll flex-1 w-1/2">
            {
              lastOrder.products.map(product =>(
                <CardMenu 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                />
              ))
            }
            <div className='flex justify-between mt-20'>
              <h3 className=' font-bold text-xl'>Total:</h3>
              <h4 className=' font-bold text-xl'>${lastOrder.totalPrice}</h4>
            </div>
          </div>
    </Layout> 
  )
}

export default MyOrder