/* eslint-disable react/prop-types */

const CardMenu = (props) => {
  return (
    <div className="flex justify-between items-center mt-3 px-1">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 flex">
                    <img src={props.image} alt="" className="w-full h-full object-cover rounded-md mx-1.5"/>
                    <p>{props.title}</p>
                </figure>
            </div>
            <div className="flex justify-between text-center items-center mr-2">
                <div className="relative">
                    <span className="text-lg font-bold">${props.price}</span>
                    {props.deleteProduct &&(
                        <span 
                            onClick={()=> props.deleteProduct(props.id)}
                            className="cursor-pointer font-semibold text-xs absolute right-0"
                            style={{top:'-8px'}}
                        >X</span>
                    )}
                </div>
            </div>
    </div>
  )
}


export default CardMenu