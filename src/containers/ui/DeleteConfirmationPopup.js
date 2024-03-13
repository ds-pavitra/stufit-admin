// DeleteConfirmationPopup.js
import React from 'react';

const DeleteConfirmationPopup = ({ message, onConfirm, onCancel }) => {
    return (
        <div>
            <div className="delete-confirmation-popup">
                <p>{message}</p>
                <div className='button_container'>
                    <button type='button' className="delete-btn btn btn-primary" onClick={onConfirm}>
                        Confirm
                    </button>
                    <button type='button' className="cancel-btn btn btn-outline-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
            <div className='modal-backdrop show' />
        </div>
    );
};

export default DeleteConfirmationPopup;
