import { useParams } from 'react-router-dom'
import React from 'react'
import { EcommerceContext } from '../Context'
import CardMenu from './CardMenu'

const OrderOfList = () => {
    let {myorder} = React.useContext(EcommerceContext)
    let {id} = useParams()

    let [pagado,setPagado] = React.useState(false)

    let products = myorder.find(order => order.id === Number(id))
    console.log(products)
    
  return (
    <div className='w-full flex flex-col items-center justify-center mt-10'>
        <div className='border-solid border-2 border-black/60 w-1/2 flex flex-col items-center justify-center  rounded-xl'>
            <div className='flex flex-col items-center justify-center mt-1'>
                <h3 className='font-semibold'>Compra del dia: {products.day} </h3>
                <h4 className='font-semibold'>A horas: {products.hour}</h4>
            </div>
            <div className='w-1/2'>
                {products.products.map(product => (
                    <CardMenu 
                        key={product.id}
                        title={product.title} 
                        image={product.images[0]} 
                        price={product.price} 
                        id={product.id}
                    />
                ))}
            </div>
            <div className='flex w-1/2 justify-between mb-2 mt-2'>
                <h1 className='font-semibold'>Total:</h1>
                <h2 
                className={pagado ? 'font-bold text-lg text-green-600' : 'font-bold text-lg text-red-600'}
                >${products.totalPrice}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default OrderOfList