import React from "react";
import { AiOutlinePlus, AiOutlineFund } from "react-icons/ai";
import { PiNoteLight, PiNotepadLight, PiClockLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import profile from "../../assets/profile.jpg";
import { useModal } from "../../state/Store";

const LeftSideBar = () => {
  const {openModal} = useModal();
  return (
    <div className={` ${openModal.value === 'menu' && openModal.open ? "translate-x-0":"-translate-x-full"} transform transition-transform duration-300 ease-in-out overflow-y-auto bg-white px-4 cursor-pointer py-5 h-screen fixed z-50 top-0 flex flex-col items-center justify-between shadow-2xl`}>
      <div>
        <div className="p-3.5 bg-gray w-fit rounded-[10px] outline-dashed outline-1">
          <AiOutlinePlus size={20} />
        </div>
        <div className="mt-10">
          <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
            <PiNoteLight size={23} />
          </div>
          <div className="p-3.5 bg-pink rounded-[10px] text-gray">
            <PiNotepadLight size={23} />
          </div>
          <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
            <PiClockLight size={23} />
          </div>
          <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
            <AiOutlineFund size={23} />
          </div>
          <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
            <HiOutlineChatBubbleLeftRight size={23} />
          </div>
          <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
            <GoPeople size={23} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5 items-center">
        <div className="p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray">
          <IoSettingsOutline size={23} />
        </div>
        <img src={profile} width="60px" height="60px" alt="user.jpg" />
      </div>
    </div>
  );
};

export default LeftSideBar;
