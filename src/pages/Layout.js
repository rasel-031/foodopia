import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Button from "../components/Button";
import { CiStar, CiCoffeeCup, CiPizza } from "react-icons/ci";
import {
  PiCoffeeLight,
  PiHamburgerLight,
  PiCookingPotLight,
} from "react-icons/pi";
import ItemCard from "../components/ItemCard";
import { foods } from "../api/data.js";
import ItemModal from "../components/ItemModal";

const Layout = () => {
  const [category, setCategory] = useState("most-ordered");
  const [openModal, setOpenModal] = useState(false);
  const [individualItem, setIndividualItem] = useState({});

  const getCategory = (name) => {
    setCategory(name);
  };
  //getId from ItemCard.js file
  const handleId = (getId) =>{
    setOpenModal(true);
    setIndividualItem(foods.find(item => item.id === getId));
  }
  return (
    <>
    <div className="pl-28 pt-28 pr-[370px] h-screen bg-gray">
      <div className="flex gap-4 overflow-x-auto w-full">
        <Button
          name="Most Ordered"
          children={<CiStar size={23} />}
          bg={category === "most-ordered" ? true : undefined}
          onClick={() => getCategory("most-ordered")}
        />
        <Button
          name="Snack"
          children={<PiCookingPotLight size={23} />}
          bg={category === "snack" ? true : undefined}
          onClick={() => getCategory("snack")}
        />
        <Button
          name="Beverage"
          children={<CiCoffeeCup size={23} />}
          bg={category === "beverage" ? true : undefined}
          onClick={() => getCategory("beverage")}
        />
        <Button
          name="Coffee"
          children={<PiCoffeeLight size={23} />}
          bg={category === "coffee" ? true : undefined}
          onClick={() => getCategory("coffee")}
        />
        <Button
          name="Italian"
          children={<CiPizza size={23} />}
          bg={category === "italian" ? true : undefined}
          onClick={() => getCategory("italian")}
        />
        <Button
          name="Burger"
          children={<PiHamburgerLight size={23} />}
          bg={category === "burger" ? true : undefined}
          onClick={() => getCategory("burger")}
        />
      </div>
      <div className="py-6">
        <div className="flex items-center justify-between">
          <p className="text-2xl">
            {category === "most-ordered" && "Most Ordered"}
            {category === "snack" && "Snacks"}
            {category === "beverage" && "Beverages"}
            {category === "coffee" && "Coffees"}
            {category === "italian" && "Italians"}
            {category === "burger" && "Burgers"}
          </p>
          <div className="flex items-center w-fit gap-1">
            <p>Cheaper</p>
            <AiOutlineArrowDown className="mt-0.5" />
          </div>
        </div>
      </div>
      <div>
        {category === "most-ordered" && (
          <ItemCard data={foods.filter((obj) => obj.order >= 10)} onChildData={handleId} />
        )}
        {category === "snack" && (
          <ItemCard data={foods.filter((obj) => obj.category === category)} onChildData={handleId} />
        )}
        {category === "beverage" && (
          <ItemCard data={foods.filter((obj) => obj.category === category)} onChildData={handleId} />
        )}
        {category === "coffee" && (
          <ItemCard data={foods.filter((obj) => obj.category === category)} onChildData={handleId} />
        )}
        {category === "italian" && (
          <ItemCard data={foods.filter((obj) => obj.category === category)} onChildData={handleId} />
        )}
        {category === "burger" && (
          <ItemCard data={foods.filter((obj) => obj.category === category)} onChildData={handleId} />
        )}
      </div>
    </div>
    {/* Item Modal */}
    <div className={openModal ? "visible" : "invisible"}>
      <ItemModal clickedOutside={setOpenModal} data={individualItem}/>
    </div>
    </>
  );
};

export default Layout;
