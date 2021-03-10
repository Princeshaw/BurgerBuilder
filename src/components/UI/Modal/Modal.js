import React from 'react';
import './modal.css';
import Aux from '../../../hoc/ReactAux';
import BackDrop from '../BackDrop/BackDrop';
const Modal = (props) =>(
    <Aux>
        <BackDrop show = {props.show} clicked = {props.modalClose}/>
        <div 
            className="Modal"
            style = {{
                transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show? '1':'0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default Modal;