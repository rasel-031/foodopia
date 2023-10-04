import React,{useState} from "react";
import ItemModal from "../components/ItemModal";
import { foods } from "../api/data";

const SearchLayout = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [individualItem, setIndividualItem] = useState({});

  const handleId = (getId) =>{
    setOpenModal(true);
    setIndividualItem(foods.find(item => item.id === getId));
  }
  return (
    <>
    <div className="pl-28 pt-28 pr-[370px] h-screen bg-gray">
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div
            className="p-3 bg-white w-fit rounded-lg cursor-pointer"
            key={index}
            onClick={()=>handleId(item.id)}
          >
            <img
              src={item.image_url}
              className="w-[180px] h-[120px] rounded-lg"
              alt="food.jpg"
            />
            <div>
              <p className="font-bold text-lg">{item.name}</p>
              <p className="text-xs">
                {item.description.length > 0
                  ? item.description.slice(0, 30)
                  : "Item description here"}
                ..
              </p>
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
      ) : (
        <div>
            <p>Search not found!</p>
        </div>
      )}
    </div>
    {/* Item Modal */}
    <div className={openModal ? "visible" : "invisible"}>
      <ItemModal clickedOutside={setOpenModal} data={individualItem}/>
    </div>
    </>
  );
};

export default SearchLayout;
