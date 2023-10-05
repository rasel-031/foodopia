import React from 'react'
import { AiOutlinePlus, AiOutlineFund } from "react-icons/ai";
import { PiNoteLight, PiNotepadLight, PiClockLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import profile from "../../assets/profile.jpg";

const LeftSideBar = () => {
  return (
    <div className='mobile:hidden tablet:bg-white tablet:px-4 tablet:cursor-pointer tablet:py-5 tablet:h-[100vh] tablet:fixed tablet:z-50 tablet:top-0 tablet:flex tablet:flex-col tablet:items-center tablet:justify-between tablet:shadow-2xl'>
        <div>
        <div className='p-3.5 bg-gray w-fit rounded-[10px] outline-dashed outline-1'>
            <AiOutlinePlus size={20}/>
        </div>
        <div className='mt-10'>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><PiNoteLight size={23}/></div>
            <div className='p-3.5 bg-pink rounded-[10px] text-gray'><PiNotepadLight size={23}/></div>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><PiClockLight size={23}/></div>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><AiOutlineFund size={23}/></div>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><HiOutlineChatBubbleLeftRight size={23}/></div>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><GoPeople size={23}/></div>
        </div>
        </div>
        <div className='flex flex-col gap-3 py-5 items-center'>
            <div className='p-3.5 hover:bg-pink hover:rounded-[10px] hover:text-gray'><IoSettingsOutline size={23}/></div>
            <img src={profile} width="60px" height="60px" alt='user.jpg'/>
        </div>
    </div>
  )
}

export default LeftSideBar;