import React from "react";

const ItemCard = ({data, onChildData}) => {
  const getItemId = (id) =>{
    //child component of Layout.js
    onChildData(id);
  }
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <div className="p-3 bg-white w-fit rounded-lg cursor-pointer" key={index} onClick={()=>getItemId(item.id)}>
          <img src={item.image_url} className="w-[180px] h-[120px] rounded-lg" alt="food.jpg"/>
          <div>
            <p className="font-bold text-lg">{item.name}</p>
            <p className="text-xs">{item.description.length > 0 ? item.description.slice(0, 30) : 'Item description here'}..</p>
            <p>
              <span className="font-bold text-lg text-pink">
                ${item.price}
              </span>
              /pcs
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
