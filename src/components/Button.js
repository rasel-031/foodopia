import React from 'react'

const Button = ({icon, name, css, bg=false, onClick }) => {
  return (
    <button onClick={onClick} className={`${bg ? "bg-pink" : "bg-white"} ${css} rounded-[8px] px-3 py-2 flex items-center hover:text-gray hover:bg-pink`}>
        {icon ? (icon) : null}
        {typeof name === "string" ? (<span className='ml-2 truncate'>{name}</span>) : (null)}
    </button>
  )
}

export default Button;