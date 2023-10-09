import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiFilter } from "react-icons/ci";
import { TbLoader3 } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import { IoCreateOutline, IoFastFoodOutline } from "react-icons/io5";
import Button from "../../components/Button";
import { useModal, useOrder, useItemContainer } from "../../state/Store";
import { foods } from "../../api/data";
import SearchLayout from "../SearchLayout";
import Layout from "../Layout";

const MobileNavBar = () => {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const { openModal, setOpenModal } = useModal();
    const { order, setOrder } = useOrder();
    const {items, setItems } = useItemContainer();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchData, setSearchData] = useState([]);

    const handleOrderClick =(value)=>{
        setOpenModal(value);
    }
    const handleResetOrder = () => {
        setOrder([]);
        items.splice(0);
        setItems([]);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const filteredFoods = foods.filter((item) =>item.category.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchData(filteredFoods);
      }

  return (
    <>
    <div className="lg:hidden fixed z-50 top-0 w-full bg-white shadow-2xl">
      <div className="flex gap-1 justify-between py-5 px-[5vw]">
        <div className="flex mb:hidden">
          <Button icon={<RxHamburgerMenu onClick={()=>handleOrderClick({value:'menu', open:!openModal.open})} />} />
        </div>
        <div className="hidden mb:flex">
          <Button icon={<RxHamburgerMenu onClick={()=>handleOrderClick({value:'menu', open:!openModal.open})} className="w-6 h-6" />} />
        </div>
        {/* for 320px to 427px */}
        <div className="flex gap-1.5 mb:hidden">
          <Button onClick={()=>setOpenSearchBar(!openSearchBar)} icon={<CiSearch />} />
          <Button icon={<TbLoader3 />} onClick={handleResetOrder}/>
          <Button icon={<IoCreateOutline />} />
          <div className="flex">
            <Button onClick={()=>handleOrderClick({value:'order-menu', open:!openModal.open})} icon={<IoFastFoodOutline className="w-6 h-6" />} />
            <span className="h-5 w-5 rounded-full text-center text-white bg-pink text-[13px]">{order.length}</span>
          </div>
        </div>
        {/* for 428px to 767px */}
        <div className="hidden mb:flex mb:gap-1.5 md:hidden">
          <Button onClick={()=>setOpenSearchBar(!openSearchBar)} icon={<CiSearch className="w-6 h-6" />} />
          <Button icon={<TbLoader3 className="w-6 h-6" onClick={handleResetOrder}/>} />
          <Button icon={<IoCreateOutline className="w-6 h-6" />} />
          <div className="flex">
            <Button onClick={()=>handleOrderClick({value:'order-menu', open:!openModal.open})} icon={<IoFastFoodOutline className="w-6 h-6" />} />
            <span className="h-5 w-5 rounded-full text-center text-white bg-pink text-[13px]">{order.length}</span>
          </div>
        </div>
        {/* for 768px to 1023px */}
        <div className="hidden md:flex md:gap-5">
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
              <button
                type="submit"
                className="absolute ml-[222px] p-1 rounded bg-white"
              >
                <CiFilter />
              </button>
            </form>
          </div>
          <Button icon={<TbLoader3 className="w-6 h-6" onClick={handleResetOrder}/>} />
          <Button icon={<IoCreateOutline className="w-6 h-6" />} />
          <div className="flex">
            <Button onClick={()=>handleOrderClick({value:'order-menu', open:!openModal.open})} icon={<IoFastFoodOutline className="w-6 h-6" />} />
            <span className="h-5 w-5 rounded-full text-center text-white bg-pink text-[13px]">{order.length}</span>
          </div>
        </div>
        {/* for 1023px to above */}
        <div className="flex mb:hidden">
          <Button icon={<AiOutlineDown className="" />} />
        </div>
        <div className="hidden mb:flex">
          <Button icon={<AiOutlineDown className="w-6 h-6" />} />
        </div>
      </div>
      <div className={openSearchBar ? "flex justify-center pb-5" : "hidden"}>
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
            <button
              type="submit"
              className="absolute ml-[222px] p-1 rounded bg-white"
            >
              <CiFilter />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="block lg:hidden">
        {searchQuery.replace(/\s+/g, '').length > 0 ? (<SearchLayout data = {searchData}/>):(<Layout/>)}
    </div>
    </>
  );
};

export default MobileNavBar;
