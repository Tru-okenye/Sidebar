import React, {useContext} from "react";
import {FaTimes} from 'react-icons/fa';
import'./App.css';
import { useGlobalContext } from "./Context";
const Modal = () => {
    const{showModal, closeModal} =useGlobalContext();
return (
<section>
    <div className={`${showModal?' modal':'display'}`}>
        <button className="icon" onClick={closeModal}>
        <FaTimes/>
        </button>
        <h2>Modal Content</h2>
    </div>
</section>
    )
};

export default Modal;