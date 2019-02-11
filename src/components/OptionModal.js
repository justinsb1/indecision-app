import React from 'react';
import Modal from 'react-modal';

// the two !! on boolean sets is equal to false, and sets a string equal to true
// onRequestClose allows the user to close the modal by clicking the background or pressing the esc key
const OptionModal = (props) => (
        <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleCloseModal}
        contentLabel = "Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__titel"> Selected Option </h3> 
            {props.selectedOption && <p className="modal__body"> {props.selectedOption} </p> }
            <button className="button" onClick={props.handleCloseModal}> Okay </button>
        </Modal>
    );



export default OptionModal;