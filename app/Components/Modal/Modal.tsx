import { useState } from "react";

function Modal({children, modalUp}:{
    children: React.ReactNode,
    modalUp:any})
    {
    return(
        <div className="bg-black w-screen h-screen fixed top-0 left-0" onClick={(e)=>{ e.stopPropagation();modalUp(e)}}>
         <div className="m-auto px-16 pb-16 border-2 border-black absolute bg-white">
            <div className="flex justify-end">  <button onClick={modalUp}>x</button></div>{children}
            </div>
        </div>
    )
}

export default Modal;