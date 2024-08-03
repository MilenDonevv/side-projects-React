import { useState } from "react"
import Modal from "./modal.jsx";
import './modal.css'





export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);


    function handleToggleModalPopup() {
setShowModalPopup(!showModalPopup);   // if it's true --> it will make it false and vice versa
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal 
                onClose={onClose}
                id = {'custom-id'}
                body = {<div>Customized body !! </div>}
                header = {<h1>Customized header !! </h1>}
                footer = {<h1>Customized footer !! </h1>}
                />
            }
        </div>
    )
}