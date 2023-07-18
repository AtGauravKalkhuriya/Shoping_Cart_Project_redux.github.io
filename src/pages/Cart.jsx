import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const{cart}= useSelector( (state)=>state);
  const[totalAmont,setTotalAmont] = useState(0);
  useEffect(()=>{
    setTotalAmont(cart.reduce((accu,curr)=>accu+curr.price,0));

  },[cart]);
  return(
    <div>
      {
        cart.length>0 ?
        <div>
          <div>
            {
              cart.map((item,index)=>{
               return <CartItem item={item} itemIndex={index} key={item.id} />
              } )            
              }
          </div>
          <div >
            <div className="fixed left-[60%] bottom-[400px]">
            <div className="text-green-600 font-semibold">Your Cart</div>
            <div className="text-green-600 font-semibold text-2xl text-bold uppercase">Summary</div>
            <p>
              <span className="text-vlack-600 font-semibold">Total Items:{cart.length}</span>
            </p>
          </div>
          <div className="fixed left-[60%] bottom-[100px] ">
            <div><span className="font-semibold">Total Amount:</span> <span className="text-black font-bold">${totalAmont}</span></div>
            <button className="bg-green-500 text-white p-1 mt-[15px] w-[250px]">Check Out</button>
            
          </div>
          </div>

          
        </div>:
        <div className="flex flex-col justify-center items-center h-[100vh] gap-y-[20px]">
          <h1 className="font-bold">Cart Empty</h1>
          <Link to="/">
          <button className="bg-green-500 text-white p-1 mt-[15px] w-[250px]">
            Shope Now
          </button>
          </Link>
        </div>
      }

    </div>
  );
};

export default Cart;
