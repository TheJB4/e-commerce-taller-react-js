import { EcommerceContext } from "../Context"
import React from "react"
const ProductDetail = () => {
    let {setOpenModal,componentShow} = React.useContext(EcommerceContext)
  return (
    <div className="w-full h-full bg-black/60 flex justify-center items-center absolute top-0 left-0">
        <div className="bg-white w-80 flex rounded-md flex-col p-4">
            <div className="flex justify-between mb-3">
                <h2 className="mt-1 ml-2">Detail: </h2>
                <div onClick={()=>setOpenModal(false)} className="mt-0.5 mr-2 cursor-pointer font-bold bg-gray-200 w-5 text-center rounded-full">X</div>  
            </div>
            <figure className="flex flex-col items-center justify-between">
                <img 
                    src={componentShow.images[0]} 
                    alt="" 
                    className="w-64 h-40 rounded-sm object-cover"
                />
                <div>
                    <div className="flex justify-between mt-2 mb-3">
                        <span className="font-light">{componentShow.title}</span>
                        <span className="font-bold">${componentShow.price}</span>
                    </div>
                    <span className=" font-semibold">{componentShow.description}</span>
                </div>
            </figure>
        </div>
    </div>
    
  )
}

export default ProductDetail