import React from 'react';

const ConfirmationModal = ({title,body,cancel,action}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{body}</p>
                    <div className="modal-action">
                        <label onClick={cancel}  className="btn btn-outline">Cancel</label>
                        <label onClick={action} className="btn">Yes</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;