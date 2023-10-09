import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider =({children})=>{
    const [order, setOrder] = useState([]);
    return(
        <OrderContext.Provider value = {{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrder =()=>{
    return useContext(OrderContext);
}

//item counter
const ItemContainerContext = createContext();
export const ItemContainerProvider =({children})=>{
    const [items, setItems] = useState([]);
    return(
        <ItemContainerContext.Provider value = {{items, setItems}}>
            {children}
        </ItemContainerContext.Provider>
    )
}

export const useItemContainer =()=>{
    return useContext(ItemContainerContext);
}

//modal context
const OpenModalContext = createContext();
export const OpenModalProvider =({children})=>{
    const [openModal, setOpenModal] = useState({value:'', open:false});
    return(
        <OpenModalContext.Provider value = {{openModal, setOpenModal}}>
            {children}
        </OpenModalContext.Provider>
    )
}

export const useModal =()=>{
    return useContext(OpenModalContext);
}