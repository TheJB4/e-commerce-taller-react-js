import React from 'react'
import PropTypes from 'prop-types'
import { totalPrice } from '../utils/total'

let EcommerceContext = React.createContext()

let EcommerceProvider = ({children}) => {
    EcommerceProvider.propTypes = {
        children : PropTypes.node.isRequired
      }
    
    let [products, setProducts] = React.useState(null)
    React.useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(res => res.json())
          .then(data => setProducts(data))
      },[])
    let productsByTitle;
    let [count,setCount] = React.useState(0)
    let [openModal, setOpenModal] = React.useState(false)
    let [openShoppingCart, setOpenShoppingCart] = React.useState(false)

    let [componentShow, setOpenComponentShow] = React.useState({})
    let [shoppingCart, setShoppingCart] = React.useState([])

    let [myorder,setMyOrder] = React.useState([])
    let [ordersFilter,setOrdersFilter] = React.useState([]) 
    let [productTitle,setProductTitle] = React.useState(null)
    
    let [productsByCategory, setProductsByCategory] = React.useState([])
    React.useEffect(()=>{
            if(productTitle) setOrdersFilter(products?.filter(product => product.title.toLowerCase().includes(productTitle.toLowerCase())))
      },[productTitle,products])
    
    let addProductByCategory = (category) => {
        let newArray = products?.filter(product =>( product.category.name.toLowerCase().includes(category)))

        setProductsByCategory(newArray)
    }
    
    let deleteProduct = (id) => {
        let newArray = shoppingCart.filter(product => product.id !== id)

        setShoppingCart(newArray)
    }

    let checkout = (order) =>{
        let newOrder = {
            id: Date.now(),
            day: new Date().toLocaleDateString(),
            hour:new Date().toLocaleTimeString(),
            products: order,
            totalPrice: totalPrice(order)
        }

        setMyOrder([...myorder,newOrder])
        setShoppingCart([])

        console.log(myorder)
    }
    return(
        <EcommerceContext.Provider value={{
            count,
            setCount,
            openModal, 
            setOpenModal,
            componentShow, 
            setOpenComponentShow,
            shoppingCart, 
            setShoppingCart,
            openShoppingCart, 
            setOpenShoppingCart,
            deleteProduct,
            checkout,
            myorder,
            products,
            setProducts,
            productTitle,
            setProductTitle,
            ordersFilter,
            setOrdersFilter,
            productsByTitle,
            productsByCategory, 
            setProductsByCategory,
            addProductByCategory
        }}>
            {children}
        </EcommerceContext.Provider>
    )
}

export {EcommerceContext,EcommerceProvider}