import React, {useState} from "react";
import { CiSearch, CiFilter} from "react-icons/ci";
import Button from "../../components/Button";
import { TbLoader3 } from "react-icons/tb";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { PiBuildings } from "react-icons/pi";
import { useItemContainer, useOrder } from "../../state/Store";
import Layout from "../Layout";
import SearchLayout from "../SearchLayout";
import { foods } from "../../api/data";

const TopNavBar = () => {
  const { setOrder } = useOrder();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const {items, setItems } = useItemContainer();

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredFoods = foods.filter((item) =>item.category.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchData(filteredFoods);
  }

  const handleResetOrder = () => {
    setOrder([]);
    items.splice(0);
    setItems([]);
  };

  return (
    <>
      <div className="tablet:pl-28 tablet:pr-6 tablet:py-5 bg-white fixed z-40 top-0 w-screen flex laptop:flex-row tablet:flex-col gap-5 items-center justify-between shadow-xl">
        <div className="flex items-center">
          <CiSearch className="absolute ml-2" />
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search menu..."
              className="bg-gray py-1.5 px-8 rounded-md w-[250px]  focus:outline-none focus:border focus:border-pink"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button type="submit" className="absolute ml-[222px] p-1 rounded bg-white">
              <CiFilter />
            </button>
          </form>
        </div>
        <div className="flex gap-5">
          <div className="mobile:hidden tablet:block">
            <p className="text-sm">Order No.</p>
            <h2 className="font-bold text-lg">#14802</h2>
          </div>
          <Button
            name="Reset Order"
            css="border-2 border-white-500"
            children={<TbLoader3 size={25} />}
            onClick={handleResetOrder}
          />
          <Button
            name="Create a note"
            css="border-2 border-white-500"
            children={<IoCreateOutline size={25} />}
          />
          <div className="flex px-2 items-center gap-2 cursor-pointer">
            <div className="p-2 bg-pink text-gray w-fit rounded-full">
              <PiBuildings />
            </div>
            <div>
              <p>Soy Resto</p>
              <p className="text-[10px]">Mon, 12 Jan</p>
            </div>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      {searchQuery.replace(/\s+/g, '').length > 0 ? (<SearchLayout data = {searchData}/>):(<Layout/>)}
    </>
  );
};

export default TopNavBar;
