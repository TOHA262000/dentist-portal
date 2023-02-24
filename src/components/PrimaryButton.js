import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-primary from-s to-secondary text-white">{children}</button>
    );
};

export default PrimaryButton;