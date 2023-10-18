import { useState } from "react";

function Modal({children}:{
    children: React.ReactNode,})
    {
    return(
        <div className="bg-black w-screen h-screen fixed top-0 left-0" onClick={(e)=>{ e.stopPropagation();}}>
         <div className="m-auto px-16 pb-16 border-2 border-black absolute bg-white">
            <div className="flex justify-end">  <button  onClick={()=>{}}>x</button></div>{children}
            </div>
        </div>
    )
}

export default Modal;