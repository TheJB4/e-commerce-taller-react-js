import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import Modal from "../../Components/Modal"


import {useContext} from "react"
import React from "react"
import ProductDetail from "../../Components/ProductDetail"
import { EcommerceContext } from "../../Context"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import { useParams } from "react-router-dom"

const Home = () => {
  let {
    openModal,
    products,
    setProductTitle,
    productTitle,
    ordersFilter,
    addProductByCategory,
    productsByCategory
  } = useContext(EcommerceContext)
  let {category} = useParams()

  React.useEffect(()=>{
    if(category){
      addProductByCategory(category)
    }
  },[category,addProductByCategory])

  let viewByTitle = () =>{
    if(productTitle?.length > 0){
      if(ordersFilter?.length > 1){
        return (ordersFilter?.map(product =>{
          return(<Card key={product.id} data={product}/>)
        }))
      }else{
        return (<h1>NADA</h1>)
      }
    }else if(category && productsByCategory?.length > 1){
        return (productsByCategory?.map(product =>{
          return(<Card key={product.id} data={product}/>)
        }))
    }else if(!productTitle && products){
      if(products.length > 1){
        return (products?.map(product =>{
          return(<Card key={product.id} data={product}/>)
        }))
    }else{
        return (<h1>NADA</h1>)
      }
    }else{
      return(
        <h2>No hay coincidencias</h2>
      )
    }
  }

  return (
    <Layout>
      {openModal && <Modal><ProductDetail/></Modal>}
      <h1>Exclusive Products</h1>
      <input 
        type="text" 
        className="mb-3 border-solid border-2 border-black focus:outline-none rounded-md p-1 mt-2" 
        placeholder="Search a product"
        onChange={(e)=>{
          setProductTitle(e.target.value)
        }}
        />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            viewByTitle()
          }
      </div>
      <CheckoutSideMenu />
    </Layout>
  )
}

export default Home