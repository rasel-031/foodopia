import React, { useState } from 'react'
import { useOrder } from '../state/Store';

const OrderPage = () => {
  const tax = 4.50;
  //use custom hook from useContext Api
  const { order } = useOrder();
  let [itemCounter, setItemCounter] = useState([]);

  const incrementItem = (getId) =>{
    setItemCounter([...itemCounter, getId]);
  }

  const decrementItem =(getId)=>{
    const indexToRemove = itemCounter.indexOf(getId);
    if (indexToRemove !== -1) {
      itemCounter.splice(indexToRemove, 1);
      setItemCounter([...itemCounter]);
    }
  }

  return (
    <div className='w-[340px] h-full bg-white fixed z-30 right-0 top-0 pt-24 pb-10 px-5 shadow-xl'>
      <p className='text-2xl py-4'>Current Order</p>
      <div className='flex flex-col gap-4 overflow-x-auto h-[300px]'>
      {order.map((item, index)=>(
        <div key={index} className='bg-gray rounded flex p-3'>
          <img src={item.image_url} className='w-[80px] h-[60px] rounded mr-4' alt='order.jpg'/>
          <div className='flex flex-col gap-2'>
            <p className='text-lg'>{item.name}</p>
            <div className='flex items-center gap-6'>
              <p className='text-lg font-bold text-pink'>${item.price}</p>
              <div className='flex items-center gap-4'>
                <button className='bg-white px-2 rounded-lg border' onClick={()=> decrementItem(item.id)}>-</button>
                {/* reduce function use for count duplicate value */}
                <p>{itemCounter.reduce((acc, id) => (id === item.id ? acc + 1 : acc), 0) + 1}</p>
                
                <button className='bg-pink px-1.5 rounded-lg border' onClick={()=> incrementItem(item.id)}>+</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className='flex flex-col gap-4 py-5'>
        <div className='flex items-center justify-between w-[300px]'>
          <p>Subtotal</p>
          <p className='font-bold'>
            {/* reduce function use for sum price*/}
            ${(itemCounter.reduce((acc, id) => acc + (order.find((item) => item.id === id)?.price || 0), 0) + order.reduce((acc, item) => acc + item.price, 0)).toFixed(2)}
          </p>
        </div>
        <div className='flex items-center justify-between w-[300px]'>
          <p>Tax</p>
          <p className='font-bold'>${order.length > 0 ? (tax) : (0.00).toFixed(2)}</p>
        </div>
        <hr/>
        <div className='flex items-center justify-between w-[300px] text-lg font-bold'>
          <p>Total</p>
          <p>
            ${(order.length > 0 ? (itemCounter.reduce((acc, id) => acc + (order.find((item) => item.id === id)?.price || 0), 0) + tax + order.reduce((acc, item) => acc + item.price, 0)) : (0.00)).toFixed(2)}
          </p>
        </div>
      </div>
      <button className='bg-pink py-3 w-full text-gray rounded'>Print Bills</button>
    </div>
  )
}

export default OrderPage;