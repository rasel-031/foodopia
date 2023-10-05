import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useOrder } from "../state/Store";

const ItemModal = ({ clickedOutside, data }) => {
  //custom hook from useContext Api
  const { order, setOrder } = useOrder();

  const handleOrder = (getItem)=>{
    if(!order.some((item) => item.id === getItem.id)){
      setOrder([...order, getItem]);
    }
  }
  
  return (
    <>
      <div className="fixed z-30 top-0 w-screen h-screen bg-white-500 opacity-25"></div>
      <div className="flex items-center justify-center w-screen h-screen fixed z-50 top-0 ">
      <OutsideClickHandler onOutsideClick={() => clickedOutside(false)} >
        <div className="p-3 bg-pink-500 w-fit rounded-lg ">
          <img
            src={data.image_url}
            className="w-[320px] h-[220px] rounded-lg"
            alt="food.jpg"
          />
          <div className="flex flex-col gap-1 ">
            <p className="font-bold text-lg">{data.name}</p>
            <p className="text-xs">{data.description}</p>
            <p>
              <span className="font-bold text-lg text-pink">${data.price}</span>
              /pcs
            </p>
            <div className="flex items-center justify-between pt-2">
              <button className="bg-white px-2 py-1 rounded" onClick={()=>handleOrder(data)}>Order Me</button>
              <button className="bg-white px-2 py-1 rounded" onClick={()=>clickedOutside(false)}>Close</button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
      </div>
    </>
  );
};

export default ItemModal;
