import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id))
    toast.error("Item Removed");
  }
  return(
    <div>
      <div className="flex relative left-[10%]   max-w-3xl gap-x-[60px] mt-[30px]">
      <div className="h-[180px]">
        <img src={item.image} className="h-full"/>
        
      </div>
     

      
      
      <div className="ml-[10px] space-y-[30px]">
        <h1 className="text-gray-700 font-semibold text-lg    mt-1">{item.title}</h1>
        <h1 className=" text-black-400 font-normal text-[15px]">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
      </div>
      <div className="flex   gap-x-[70px] relative top-[170px] right-[400px]">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <div onClick={removeFromCart}>
          <FcDeleteDatabase className="text-2xl"/>

        </div>
      </div>
     

      </div>
      <div className="border border-b w-[600px] ml-[120px] mt-[30px] mb-[30px]"></div>
      
      
      
      
    </div>
  ); 
};

export default CartItem;
